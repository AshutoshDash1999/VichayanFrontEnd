import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import Feed from "../../components/feed/Feed";

import { getAllPosts } from "../../Redux/actions/post/postActions";

export class PostCont extends Component {
  render() {
    return <Feed {...this.props} />;
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
      getAllPosts: getAllPosts,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCont);
