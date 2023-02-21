import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import Register from "../../pages/register/Signup";
import { registerUser, setEmail } from "../../Redux/actions/authActions";

export class RegisterCont extends Component {
  render() {
    return <Register {...this.props} />;
  }
}

export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registerUser: registerUser,
      setEmail: setEmail,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCont);
