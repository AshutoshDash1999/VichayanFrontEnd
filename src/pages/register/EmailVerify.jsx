// import "./OTPVerify.css";
import React from "react";
import "../../style.css";
import EmailVerify from "../../components/EmailVerify/EmailVerify";

const OTP = ({ history }) => {
  return (
    <>
      {/* ============= Nav======================== */}
      <nav class=" navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" class="navbar_logo" />
        </a>
      </nav>
      {/* =================Nav End================== */}

      <EmailVerify history={history} />
    </>
  );
};

export default OTP;
