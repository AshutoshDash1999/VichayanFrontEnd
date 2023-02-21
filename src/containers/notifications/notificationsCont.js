import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import Notifications from "../../pages/notification/Notification";

import { getAllNotification } from "../../Redux/actions/notifications/notificationsActions";

export class NotificationsCont extends Component {
  componentDidMount() {
    const { getAllNotification } = this.props;
    getAllNotification();
  }
  render() {
    return <Notifications {...this.props} />;
  }
}

export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
    posts: store.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllNotification: getAllNotification,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsCont);
