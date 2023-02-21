import { BASE_URL } from "../../../shared/constants/sharedConstants";
import { store } from "../../store/index";
import { setSnackBar } from "../snackbar/snackbarAction";
import { setLoader, unsetLoader } from "../loader/loaderAction";
import { SET_ALL_CONNECTIONS, SET_ALL_CONNECTION_REQUEST, SET_ALL_USERS, SET_ALL_PENDING_USERS } from "../../constants/connections/connnectionsConst";
import { getToken } from "../authActions";
import axios from "axios";
export const setAllConnctions = (payload) => {
  return {
    type: SET_ALL_CONNECTIONS,
    payload,
  };
};
export const setAllSentFriendRequests = (payload) => {
  return {
    type: SET_ALL_CONNECTION_REQUEST,
    payload,
  };
};
export const setAllPendingRequests = (payload) => {
  return {
    type: SET_ALL_PENDING_USERS,
    payload,
  };
};
export const setAllUsers = (payload) => {
  return {
    type: SET_ALL_USERS,
    payload,
  };
};

export const getAllConnections = () => {
  return (dispatch) => {
    dispatch(setLoader());
    const token = getToken();
    axios
      .get(`${BASE_URL}dev/api/v1/connection/`, { headers: { Authorization: `Bearer ${token}` } })
      .then((resConnec) => {
        dispatch(setAllConnctions(resConnec.data.response));
        dispatch(unsetLoader());
        dispatch(getAllSentRequests());
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.clear();
          window.location.reload();
        }
      });
  };
};

export const getAllSentRequests = () => {
  return (dispatch) => {
    const token = getToken();
    axios.get(`${BASE_URL}dev/api/v1/connection/sent`, { headers: { Authorization: `Bearer ${token}` } }).then((resSent) => {
      dispatch(setAllSentFriendRequests(resSent.data.response));
      dispatch(getAllPendingRequests());
    });
  };
};

export const getAllPendingRequests = () => {
  return (dispatch) => {
    const token = getToken();
    axios.get(`${BASE_URL}dev/api/v1/connection/request`, { headers: { Authorization: `Bearer ${token}` } }).then((resPend) => {
      dispatch(setAllPendingRequests(resPend.data.response));
      dispatch(getAllUsers());
    });
  };
};

export const getAllUsers = () => {
  return (dispatch) => {
    const token = getToken();
    axios.get(`${BASE_URL}dev/api/v1/user/all`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
      const id = store.getState().auth.userInfo._id;
      const users = res.data.response || [];
      const usersFiltered = users.filter((s) => {
        return s._id !== id;
      });
      dispatch(setAllUsers(usersFiltered));
    });
  };
};

export const sendConnectionRequest = async (id) => {
  const token = getToken();
  try {
    axios({
      method: "post",
      url: `${BASE_URL}dev/api/v1/connection/send/${id}`,
      headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
    })
      .then(function (response) {
        store.dispatch(getAllConnections());
        store.dispatch(getAllSentRequests());
        store.dispatch(getAllPendingRequests());
        store.dispatch(getAllUsers());
        store.dispatch(setSnackBar(true, response.data.message));
      })
      .catch(function (response) {});
  } catch (error) {}
};

export const acceptConnetionRequest = async (id) => {
  const token = getToken();
  axios({
    method: "PUT",
    url: `${BASE_URL}dev/api/v1/connection/accept/${id}`,
    headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
  })
    .then(function (res) {
      store.dispatch(setSnackBar(true, res.data.messsage));
      store.dispatch(getAllConnections());
      store.dispatch(getAllSentRequests());
      store.dispatch(getAllPendingRequests());
      store.dispatch(getAllUsers());
    })
    .catch(function (error) {
      store.dispatch(setSnackBar(true, error.response.data.message));
    });
};

export const getAllFriendRequests = async (id, callback = () => {}) => {
  const token = getToken();
  axios.get(`${BASE_URL}/dev/api/v1/connection/request`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {});
};

export const rejectFriendRequest = async (id) => {
  const token = getToken();
  axios({
    method: "PUT",
    url: `${BASE_URL}dev/api/v1/connection/ignore/${id}`,
    headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
  })
    .then(function (res) {
      store.dispatch(getAllConnections());
      store.dispatch(getAllSentRequests());
      store.dispatch(getAllPendingRequests());
      store.dispatch(getAllUsers());
      store.dispatch(setSnackBar(true, res.data.messsage));
    })
    .catch(function (error) {
      store.dispatch(setSnackBar(true, error.response.data.message));
    });
};
