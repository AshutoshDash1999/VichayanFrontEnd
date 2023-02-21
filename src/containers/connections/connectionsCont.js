import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import Connection from "../../pages/connection/connection";

import { getAllConnections, getAllSentRequests, getAllPendingRequests, getAllUsers } from "../../Redux/actions/connections/connectionAction";

export class ConnectionCont extends Component {
  componentDidMount() {
    const { getAllConnections, getAllSentRequests, getAllPendingRequests, getAllUsers } = this.props;
    getAllConnections();
    // getAllSentRequests();
    // getAllPendingRequests();
    // getAllUsers();
  }
  render() {
    return <Connection {...this.props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionCont);
