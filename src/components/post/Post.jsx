import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { commentPost, getPostComments, getPostLikes, likePost } from "../../Redux/actions/post/postActions";
import { Icon, Menu, MenuItem } from "@material-ui/core";
import BasicMenu from "./options";
import { getToken } from "../../Redux/actions/authActions";
import AvatarComp from "../common/avatar";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
// import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const id = post._id;
  const token = getToken();
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getPostLikesMain();
    getPostCommentsMain();
  }, []);

  const getPostLikesMain = () => {
    getPostLikes(id, (res) => {
      setLikes(res.data.response);
    });
  };
  const getPostCommentsMain = () => {
    setComment("");
    getPostComments(id, (res) => {
      setComments(res.data.response);
    });
  };
  return (
    <div className="post1">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="d-flex">
              <div>
                <AvatarComp name={post.createdBy.name} src="" />
              </div>
              <div>
                <div className="postUsername">{post.createdBy.name}</div>
                <div className="postDate">{format(post.createdAt)}</div>
              </div>
            </div>
          </div>
          <div className="postTopRight">
            <BasicMenu id={id} />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.text}</span>
        </div>
        <div className="div-image-wrapper">
          {post.images.map((s) => (
            <img className="postImg" src={s.url} alt="" />
          ))}
        </div>
        <div>
          {post.docs.map((s) => (
            <div
              onClick={() => {
                window.open(s.url);
              }}
            >
              {s.originalname}{" "}
              <span style={{ color: "blue" }} className="pointer">
                Download
              </span>
            </div>
            // <iframe src={s.url} className="loading" width="100%" style={{ height: "500px" }}></iframe>
            // <img className="postImg" src={s.url} alt="" />
          ))}
        </div>
        <div className="postBottom pt-1">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`/assets/like.png`} alt="" />
            {/* <img
              className="likeIcon"
              src={`${PF}heart.png`}
              //  onClick={likeHandler}
              alt=""
            /> */}
            <span className="postLikeCounter">{likes.length} people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{comments.length} &nbsp;comments</span>
          </div>
        </div>
        <div className="div-cont-lsc mx-3 py-2 pt-3">
          <div className="d-flex align-items-center justify-content-between  ">
            <div
              onClick={() => {
                likePost(id, getPostLikesMain);
              }}
              className="d-flex align-items-center pointer"
            >
              <ThumbUpAltOutlinedIcon /> &nbsp; like
            </div>
            <div
              onClick={() => {
                document.getElementById(post._id)?.focus();
              }}
              className="d-flex align-items-center pointer"
            >
              <ModeCommentOutlinedIcon />
              &nbsp; comment
            </div>
            <div className="d-flex align-items-center pointer">
              <RedoOutlinedIcon />
              &nbsp; share
            </div>
          </div>
        </div>
        <div className="d-flex mt-3 mb-2">
          <input
            id={post._id}
            className="w-100 mx-1"
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            onClick={() => {
              commentPost(id, comment, getPostCommentsMain);
            }}
            className="btn-comment"
          >
            comment
          </button>
        </div>
        <div>
          {comments.map((s) => (
            <div className="post-bottom-right py-1 px-2">
              <AvatarComp name="something" />
              <div className="div-comment px-2 ml-1 py-2">
                <div className="comment-user">
                  Sunny singh
                  <div className="job-description">Web Developer @ Uplers | Javascript</div>
                </div>
                <div className="actual-comment"> {s.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
