import "./share.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Label, Room, Cancel } from "@material-ui/icons";
import { useContext, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import noImg from "assets/person/noAvatar.png";

import { connect } from "react-redux";
import { Avatar } from "@material-ui/core";
import { createPost } from "../../Redux/actions/post/postActions";

function Share({ auth }) {
  const user = auth.userInfo;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [docs, setDocs] = useState(null);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Avatar
            alt="Remy Sharp"
            src="person/noAvatar.png"
            sx={{ width: 24, height: 24 }}
          >
            {user.name.substring(0, 2)}
          </Avatar>
          {/* <img className="shareProfileImg" src={"person/noAvatar.png"} alt="" /> */}
          <input
            placeholder={"What's in your mind " + user.name + "?"}
            className="shareInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{marginLeft:"10px"}}
          />
        </div>
        <hr className="shareHr" />
        {/* {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )} */}
        <div className="shareBottom">
          <div className="shareOptions">
            {/* <label htmlFor="file" className="shareOption"> */}
            <AddAPhotoIcon style={{ color: "#c3357f" }} className="shareIcon" />
            <span
              className="shareOptionText mobile_none"
              style={{ color: "#c3357f" }}
            >
              Photo or Video
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              // value={image}
              onChange={(e) => setImage(e.target.files[0])}
              // onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {/* </label> */}
          <div className="shareOption">
            <BorderColorIcon
              style={{ color: "#c3357f" }}
              className="shareIcon"
            />
            <span
              style={{ color: "#c3357f" }}
              className="shareOptionText mobile_none"
            >
              Write An Article
            </span>
          </div>
          {/* <label htmlFor="files"> */}
          <div className="shareOption">
            <AssignmentIcon
              style={{ color: "#c3357f" }}
              className="shareIcon"
            />
            <span
              style={{ color: "#c3357f" }}
              className="shareOptionText mobile_none"
            >
              Document
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="files"
              accept=".png,.jpeg,.jpg"
              // value={image}
              onChange={(e) => setDocs(e.target.files[0])}
              // onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {/* </label> */}
          {/* </div> */}
          <button
            className="shareButton"
            type="submit"
            onClick={() => {
              createPost(description, image, docs);
            }}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
  };
};

export default connect(mapStateToProps, null)(Share);
