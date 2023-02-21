import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/userAction";
import { connect } from "react-redux";
import { Avatar, Badge, Grid } from "@material-ui/core";
import { withRouter } from "react-router";
import BasicMenu from "./logout";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ auth, history }) => {
  const dispatch = useDispatch();
  const user = auth.userInfo;
  // const userLogin = useSelector(state => state.userLogin)
  // const {  userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      {/* // <!--.Navbar --> mob_75 */}
      <Grid container className="navbar-dark py-1 ">
        <Grid item xs={12} md={3}>
          <a class="ml-3" href="/">
            <img src="images/logo.png" class="navbar_logo" />
          </a>
        </Grid>
        <Grid item md={9} xs={12} className="flex-header-class  ">
          <div class="mob_margin col-md-7 ">
            <form class="form-inline full_width">
              <input type="text" class="nav-link width_80 " placeholder="Search ........." />
              <a href="#" class="menu_search">
                <img src="https://img.icons8.com/material-outlined/28/000000/search--v1.png" />
              </a>
            </form>
          </div>
          {/* </Grid>
        <Grid item md={4} xs={12} className="flex-header-class  "> */}
          <div className="ml-1 py-2 d-none d-sm-none d-md-flex">
            <Link to="/">
              <Badge badgeContent={4} className="icons-header-custom-badge">
                <HomeIcon className="icons-header-custom" />
              </Badge>
            </Link>
            <Link to="/connection">
              <Badge badgeContent={4} className="icons-header-custom-badge">
                <PersonIcon className="icons-header-custom" />
              </Badge>
            </Link>
            <Link to="/messenger">
              <Badge badgeContent={4} className="icons-header-custom-badge">
                <ForumIcon className="icons-header-custom" />
              </Badge>
            </Link>
            <Link to="/notification">
              <Badge badgeContent={4} className="icons-header-custom-badge">
                <NotificationsIcon className="icons-header-custom" />
              </Badge>
            </Link>
          </div>

          <div className="badge-options  d-none d-sm-none d-md-flex ">
            <Avatar
              style={{ width: 30, height: 30, fontSize: "18px" }}
              onClick={() => {
                history.push("/profile");
              }}
            >
              {user.name.substring(0, 2)}
            </Avatar>
            <BasicMenu history={history} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
  };
};

export default withRouter(connect(mapStateToProps, null)(Header));
