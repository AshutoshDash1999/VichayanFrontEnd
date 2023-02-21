import React, { Component } from "react";
import { connect } from "react-redux";
import Snackbar from "../../components/snackbar/snackbar";

import { closeSnackBar } from "../../Redux/actions/snackbar/snackbarAction";

export class SnackbarCont extends Component {
  render() {
    return <Snackbar {...this.props} />;
  }
}

export const mapStateToProps = (store) => {
  return {
    snackbar: store.snackbar,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    closeSnackBar: () => {
      dispatch(closeSnackBar());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarCont);
