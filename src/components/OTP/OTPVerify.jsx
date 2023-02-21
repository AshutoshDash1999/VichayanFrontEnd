// import React, { Component } from "react";
import "./OTPVerify.css";
import React, { Component, useState } from "react";
import OtpInput from "react-otp-input";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

// import { otpVerify } from "../../Redux/actions/userAction";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import "./styles.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export default function OTPVerify() {
  const history = useHistory();
  const [otp, setOtp] = useState();
  // const dispatch = useDispatch();

  const classes = useStyles();
  const theme = useTheme();

  // Timer

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const OTPSender = (e) => {
    // e.preventDefault();
    const email = localStorage.getItem("loginEmail");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    // dispatch(otpVerify(otp));
    // console.log(otp);
    axios
      .post(
        "http://localhost:5000/dev/api/v1/user/sendOTP",
        {
          email: email,
        },
        config
      )
      .then((response) => {
        // console.log(response.data);
        // localStorage.setItem("jwt", response.data.token);
        // localStorage.setItem("user", JSON.stringify(response.data.userInfo));
        // window.alert("Registration Successful!");
        console.log("OTP Sent Successful!");
        // history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        window.alert("OTP Sending Failed ");
        console.log("OTP Sending Failed");
      });
    // history.push("/");
    // history.go(0);
    // console.log("otp verification successfull.");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please Enter your OTP");
    } else {
      const email = localStorage.getItem("loginEmail");
      console.log(email);
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      // dispatch(otpVerify(otp));
      console.log(otp);
      axios
        .post(
          "http://localhost:5000/dev/api/v1/user/verifyOTP",
          {
            email: email,
            otp: otp,
          },
          config
        )
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("jwt", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.userInfo));
          // window.alert("Registration Successful!");
          console.log("OTP verification Successful!");
          history.push("/profile");
        })
        .catch((error) => {
          console.log(error);
          window.alert("Verification Failed ");
          console.log("Verification Failed");
        });
      // history.push("/");
      // history.go(0);
      // console.log("otp verification successfull.");
    }
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline class="card" style="width: 18rem;" />
        <div className={classes.paper}>
          <Grid container style={{ backgroundColor: "white" }} className={classes.grid} justify="center" alignItems="center" spacing={3}>
            <Grid item container justify="center">
              <Grid item container alignItems="center" direction="column">
                <Grid item>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Verification Code
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Paper elevation={0}>
                <Typography variant="h6">Please enter the verification code sent to your EmailId</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} container justify="center" alignItems="center" direction="column">
              <Grid item spacing={3} justify="center">
                <OtpInput
                  onChange={setOtp}
                  numInputs={6}
                  // separator={<span>-</span>}
                  value={otp}
                  // onChange={setOtp}
                  autoFocus
                  // OTPLength={6}
                  // otpType="number"
                  // disabled={false}
                  separator={
                    <span>
                      <strong>.</strong>
                    </span>
                  }
                  inputStyle={{
                    width: "3rem",
                    height: "3rem",
                    margin: "0 1rem",
                    fontSize: "2rem",
                    borderRadius: 4,
                    border: "1px solid rgba(0,0,0,0.3)",
                  }}
                />
              </Grid>
              <Typography fontWeight={500} align="center" color="textSecondary">
                {" "}
                Resend OTP in <span style={{ color: "green", fontWeight: "bold" }}> 00:{counter}</span>{" "}
              </Typography>
              <Grid item>
                <Button type="submit" fullWidth variant="contained" color="#000" className={classes.submit} onClick={submitHandler}>
                  Verify
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type=""
                  fullWidth
                  variant="contained"
                  color="#FFFF00"
                  // className={classes.submit}
                  onClick={OTPSender}
                >
                  Resend Verification Code
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
