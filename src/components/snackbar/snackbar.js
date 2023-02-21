import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
export default class SnackbarComp extends Component {
  render() {
    const { snackbar, closeSnackBar } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbar.response_received}
        autoHideDuration={5000}
        onClose={() => {
          closeSnackBar();
        }}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{snackbar.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => {
              closeSnackBar();
            }}
          >
            <Icon>close</Icon>
          </IconButton>,
        ]}
      />
    );
  }
}
