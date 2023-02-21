import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Loader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <Dialog
        open={loader.open}
        aria-labelledby="Loading..."
      >
        <DialogTitle id="simple-dialog-title">
          <CircularProgress />
        </DialogTitle>
      </Dialog>
    );
  }
}