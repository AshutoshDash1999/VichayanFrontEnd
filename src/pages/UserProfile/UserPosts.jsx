import { Divider, Row } from "antd";
import React from "react";
import Posts from "../../components/Posts/Posts";
import UserPostsStyle from "./userProfile.module.css";

function UserPosts() {
  return (
    <div>
      <div className={UserPostsStyle.userPost}>
        <Row className={UserPostsStyle.userActivity}>You liked this post.</Row>
        <Divider className={UserPostsStyle.divider} />
        <Posts />
      </div>
      <div className={UserPostsStyle.userPost}>
        <Row className={UserPostsStyle.userActivity}>You liked this post.</Row>
        <Divider className={UserPostsStyle.divider}/>
        <Posts />
      </div>
      <div className={UserPostsStyle.userPost}>
        <Row className={UserPostsStyle.userActivity}>You liked this post.</Row>
        <Divider className={UserPostsStyle.divider}/>
        <Posts />
      </div>
    </div>
  );
}

export default UserPosts;
