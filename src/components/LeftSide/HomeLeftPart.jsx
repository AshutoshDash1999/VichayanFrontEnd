import React, { Component } from "react";
import "../../style.css";
import "../../all.css";
import "./leftPart.css";
import { connect } from "react-redux";
import {
  Avatar,
  Chip,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
// import { useSelector } from "react-redux";
// import styles from './Profile.css';

const classes = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
});

function Leftside({ auth }) {
  const user = auth.userInfo;
  // // const userInfo = useSelector((state) => state.userLogin);
  // console.log("dsvbdjvbs"+userInfo);
  // console.log(userInfo.response.name);
  return (
    <>
      {/* <div className=""> */}
      <div class="col-md-3 col-sm-12 col-xs-12 mobile_none">
        {/* <div class="left_pink_bg "></div>
        <img src="images/left_mdl.png" class="left_img" />
        <Avatar className="left-img_circle">{user.name.substring(0, 2)}</Avatar>

        <a href="#" style={{ textDecoration: "none" }} class="edit">
          Edit &nbsp;&nbsp;
          <img src="https://img.icons8.com/material-outlined/18/c3357f/pencil--v2.png" />
        </a>
        <br />
        <h4 class="post">{user.name}</h4>
        <h6 class="profile_name">UI-UX Analyst </h6> */}
        <Card className={classes.root}>
          <CardActionArea>
            <img src="images/left_mdl.png" class="left_img" alt="avatar" />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Avatar className="left-img_circle">
                  {user.name.substring(0, 2)}
                </Avatar>
                <IconButton aria-label="edit" className="editBtn" size="small">
                  <EditIcon style={{ color: "#c3357f"}} />
                </IconButton>
                <br />
                <h4 class="post">{user.name}</h4>
                <h6 class="profile_name">UI-UX Analyst </h6>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <p
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "70px",
              }}
            >
              <span class="following">{user.followings.length} Following</span>{" "}
              &nbsp;&nbsp;
              <span class="followers">{user.followers.length} followers</span>
            </p> */}
            <div
              style={{
                width: "200%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Chip
                variant="outlined"
                color="secondary"
                label={"Following"}
                avatar={<Avatar>{user.followings.length}</Avatar>}
              />
              <Chip
                variant="outlined"
                color="secondary"
                label={"Followers"}
                avatar={<Avatar>{user.followers.length}</Avatar>}
              />
            </div>
          </CardActions>
        </Card>
        {/* <div class="clr-bdr mt-o">
          <h4 class="articles">Top Research Articles /</h4>

          <div class="media" style={{ background: "#f4f4f4", padding: "5px" }}>
            <div class="media-left">
              <img src="images/l-1.png" class="media-object" style={{ width: "60px" }} />
            </div>
            <div class="media-body">
              <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
              <p class="media_p">
                Publised 20. 06. 2020 <br />
                by<b style={{ color: "#000" }}>John Dame</b>
              </p>
            </div>
          </div>

          <div class="media" style={{ background: "#f4f4f4", padding: "5px" }}>
            <div class="media-left">
              <img src="images/l-2.png" class="media-object" style={{ width: "60px" }} />
            </div>
            <div class="media-body">
              <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
              <p class="media_p">
                Publised 20. 06. 2020 <br />
                by<b style={{ color: "#000" }}>John Dame</b>
              </p>
            </div>
          </div>

          <div class="media" style={{ background: "#f4f4f4", padding: "5px" }}>
            <div class="media-left">
              <img src="images/l-3.png" class="media-object" style={{ width: "60px" }} />
            </div>
            <div class="media-body">
              <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
              <p class="media_p">
                Publised 20. 06. 2020 <br />
                by<b style={{ color: "#000" }}>John Dame</b>
              </p>
            </div>
          </div>
          <br />
          <a href="#" class="more">
            Show More Articles /
          </a>
        </div> */}
        <br />
        {/* <div class="top-reasearch-left">
          <h4 class="articles">
            Write A Recearch Paper &nbsp; &nbsp;&nbsp;
            <i class="fa fa-pencil-square-o " aria-hidden="true"></i>
          </h4>

          <div>
            <div class="tab">
              <button class="tablinks" onClick="openCity(event, 'Work')" id="defaultOpen">
                <img src="images/icons/work.png" class="work_image_article" /> &nbsp;Work
              </button>
              <button class="tablinks" onClick="openCity(event, 'Bookmark')">
                <img src="images/icons/bookmark.png" class="work_image_article" /> &nbsp;Bookmark
              </button>
              <button class="tablinks" onClick="openCity(event, 'Appreciations')">
                <img src="images/icons/3_a.png" class="work_image_article" /> &nbsp;Appreciations
              </button>
              <button class="tablinks" onClick="openCity(event, 'Insights')">
                <img src="images/icons/insites.png" class="work_image_article" /> &nbsp;Insights
              </button>
              <button class="tablinks" onClick="openCity(event, 'Draft')">
                <img src="images/icons/draft.png" class="work_image_article" /> &nbsp;Draft
              </button>
              <button class="tablinks" onClick="openCity(event, 'Updates')">
                <img src="images/icons/last.png" class="work_image_article" /> &nbsp;Updates
              </button>
            </div>
            <br />
            <div id="Work" class="tabcontent">
              <h5 class="create"> Create Work</h5>
              <p>
                <i class="fa fa-pencil-square-o pencil_article" style={{ display: "block" }}></i>
              </p>
              <a href="work.html" class="view">
                View Details
              </a>
              <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
            </div> */}

        {/* ================================= commented sections ================= */}

        {/* <div id="Bookmark" class="tabcontent">
                            <h5 class="create"> Create  Bookmark</h5>
                            <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                            <a href="bookmark.html" class="view">View Details</a>
                            <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                        </div> */}

        {/* <div id="Appreciations" class="tabcontent">
                            <h5 class="create"> Create  Appreciations</h5>
                            <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                            <a href="appreciations.html" class="view">View Details</a>
                            <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                        </div>
                        <div id="Insights" class="tabcontent">
                            <h5 class="create"> Create  Insights</h5>
                            <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                            <a href="Insights.html" class="view">View Details</a>
                            <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                        </div>

                        <div id="Draft" class="tabcontent">
                            <h5 class="create"> Create  Draft</h5>
                            <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                            <a href="Draft.html" class="view">View Details</a>
                            <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                        </div>

                        <div id="Updates" class="tabcontent">
                            <h5 class="create"> See  Updates</h5>
                            <p><i class="fa fa-pencil-square-o pencil_article" style={{ display: 'block' }}></i></p>
                            <a href="Updates.html" class="view">View Details</a>
                            <p class="feedback">Get feedback,views, and appreciations.Public projects can be featured by our curators.</p>
                        </div> */}

        {/* ================================= commented sections ================= */}

        {/* <br />
          </div>

          <h4 class="copy"> &copy; 2020. all rights reserved.</h4>
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
}
export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
  };
};

export default connect(mapStateToProps, null)(Leftside);
