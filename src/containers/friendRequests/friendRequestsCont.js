import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import FriendRequests from "../../pages/connection/FriendRequests";

import { getAllConnections, getAllSentRequests, getAllPendingRequests, getAllUsers } from "../../Redux/actions/connections/connectionAction";

export class FriendRequestsCont extends Component {
  componentDidMount() {
    const { getAllConnections, getAllSentRequests, getAllPendingRequests, getAllUsers } = this.props;
    getAllConnections();
    // getAllSentRequests();
    // getAllPendingRequests();
    // getAllUsers();
  }
  render() {
    return <FriendRequests {...this.props} />;
  }
}

export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
    connection: store.connection,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllConnections: getAllConnections,
      getAllSentRequests: getAllSentRequests,
      getAllPendingRequests: getAllPendingRequests,
      getAllUsers: getAllUsers,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsCont);
