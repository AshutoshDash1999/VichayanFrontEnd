import "antd/dist/antd.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckAuth from "./components/auth";
import ConnectionCont from "./containers/connections/connectionsCont";
import friendRequestsCont from "./containers/friendRequests/friendRequestsCont";
import LoaderCont from "./containers/loader/loaderCont";
import NotificationsCont from "./containers/notifications/notificationsCont";
import RegisterCont from "./containers/register/registerCont";
import SnackbarCont from "./containers/snackbar/snackbarCont";
import usersCont from "./containers/users/usersCont";
import Connections from "./pages/Connections/Connections";
import Forgetpassword from "./pages/forgetPassword/ForgetPassword";
import OTP from "./pages/forgetPassword/OTP";
import SetNewPassword from "./pages/forgetPassword/SetPassword";
import Home from "./pages/home/Home";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/login/Signin";
import Messages from "./pages/Messages/Messages";
import Messenger from "./pages/messenger/Messenger";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import EmailVerify from "./pages/register/EmailVerify";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import "./style/general.css";
function App({ auth, connection }) {
  const { userInfo } = auth;
  const isLoggedIn = userInfo !== null && userInfo !== undefined;
  let body = "";
  if (isLoggedIn) {
    body = <div></div>;
  } else {
    body = (
      <div>
        <Route exact path="/home" component={HomePage} />
        <Route path="/checkAuth" component={CheckAuth} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connections" component={Connections} />
        <Route exact path="/friendRequests" component={friendRequestsCont} />
        <Route exact path="/users" component={usersCont} />
        <Route exact path="/notification" component={Notifications} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/profileEdit" component={ProfileEdit} />
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterCont} />
        <Route exact path="/Forgetpassword" component={Forgetpassword} />
        <Route exact path="/SetNewPassword" component={SetNewPassword} />
        <Route exact path="/OTP" component={OTP} />
        <Route exact path="/emailverify" component={EmailVerify} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/searchResults" component={SearchResultsPage} />
      </div>
    );
  }

  return (
    <div>
      <LoaderCont />
      <SnackbarCont />
      <Router>
        <Switch>
          {body}
          {/* <Route exact path="/user/:id" component={Profile} />
        <Route exact path="/post/:id" component={ProfileEdit} />
      */}
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    connection: state,
  };
};
export default connect(mapStateToProps, null)(App);
