import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import { OTPSender, submitHandler } from "../../Redux/actions/authActions";

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
export default function EmailVerify({ history }) {
  const [otp, setOtp] = useState("");

  const classes = useStyles();

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

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
                  value={otp}
                  autoFocus
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="#000"
                  className={classes.submit}
                  onClick={() => {
                    submitHandler(otp, history);
                  }}
                >
                  Verify
                </Button>
              </Grid>
              <Grid item>
                <Button type="" fullWidth variant="contained" color="#FFFF00" onClick={OTPSender}>
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
