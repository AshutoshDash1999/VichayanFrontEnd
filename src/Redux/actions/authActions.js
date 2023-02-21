import { SET_EMAIL, SET_LOGIN_INFO } from "../constants/authConst";

import axios from "axios";
import { BASE_URL } from "../../shared/constants/sharedConstants";
import { store } from "../store/index";
import { setSnackBar } from "./snackbar/snackbarAction";
import { setLoader, unsetLoader } from "./loader/loaderAction";

export const getToken = () => {
  return store.getState().auth.token;
};

export const setUserAuth = (payload) => {
  return {
    type: SET_LOGIN_INFO,
    payload,
  };
};

export const setEmail = (payload) => {
  return {
    type: SET_EMAIL,
    payload,
  };
};

export const registerUser = (firstName, lastName, email, password, confirmPassword, phoneNumber, date, history) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  if (firstName === "") {
    store.dispatch(setSnackBar(true, "Please Enter First Name"));
  } else if (lastName === "") {
    store.dispatch(setSnackBar(true, "Please Enter First Name"));
  } else if (email.length === 0) {
    store.dispatch(setSnackBar(true, "Please enter email"));
  } else if (password === "") {
    store.dispatch(setSnackBar(true, "Please Enter a password"));
  } else if (confirmPassword === "") {
    store.dispatch(setSnackBar(true, "Please enter confirm password"));
  } else if (password !== confirmPassword) {
    store.dispatch(setSnackBar(true, "password password should match confirm password"));
  } else if (phoneNumber.length < 10) {
    store.dispatch(setSnackBar(true, "Please enter phone number"));
  } else if (date === null) {
    store.dispatch(setSnackBar(true, "Please select a date"));
  } else {
    store.dispatch(setLoader());
    axios
      .post(
        `${BASE_URL}dev/api/v1/user/register`,
        {
          name: firstName.concat(" ", lastName),
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        },
        config
      )
      .then((response) => {
        store.dispatch(unsetLoader());
        store.dispatch(setSnackBar(true, "Please enter OTP to continue"));
        localStorage.setItem("email", email);
        history.push("/emailverify");
      })
      .catch((error) => {
        store.dispatch(unsetLoader());
        store.dispatch(setSnackBar(true, error.response.data.email));
      });
  }
};

export const OTPSender = () => {
  const email = localStorage.getItem("email");
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(
      `${BASE_URL}dev/api/v1/user/sendOTP`,
      {
        email: email,
      },
      config
    )
    .then((response) => {
      store.dispatch(setSnackBar(true, "OTP sent successfully"));
    })
    .catch((error) => {});
};
export const submitHandler = (otp, history) => {
  const forLogin = localStorage.getItem("login") || false;
  const path = forLogin === false ? "emailverify" : "verifyOTP";

  if (otp === "") {
    store.dispatch(setSnackBar(true, "Please Enter your OTP"));
  } else {
    const email = localStorage.getItem("email");
    const obj = forLogin === false ? { email: email, verificationCode: otp } : { email, otp };
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`${BASE_URL}dev/api/v1/user/${path}`, obj, config)
      .then((response) => {
        store.dispatch(setSnackBar(true, response.data.message));
        store.dispatch(setUserAuth({ userInfo: response.data.userInfo, token: response.data.token }));
        localStorage.removeItem("email");
        localStorage.removeItem("login");
        history.push("/");
      })
      .catch((error) => {
        store.dispatch(setSnackBar(true, error.message));
      });
  }
};

export const loginUser = (email, password, history) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  if (email === "") {
    store.dispatch(setSnackBar(true, "Please Enter your email "));
  } else if (password === "") {
    store.dispatch(setSnackBar(true, "Please Enter your password "));
  } else {
    store.dispatch(setLoader());

    axios
      .post(
        `${BASE_URL}dev/api/v1/user/login`,
        {
          email: email,
          password: password,
        },
        config
      )
      .then((response) => {
        store.dispatch(setSnackBar(true, response.data.message));
        localStorage.setItem("email", email);
        localStorage.setItem("login", true);
        store.dispatch(unsetLoader());
        submitHandler(response.data.userInfo.otp, history)
      })
      .catch((error) => {
        store.dispatch(unsetLoader());
        store.dispatch(setSnackBar(true, error.response.data.email));
      });
  }
};

export const logOutUser = (history) => {
  localStorage.clear();
  history.push("/");
  window.location.reload();
};
