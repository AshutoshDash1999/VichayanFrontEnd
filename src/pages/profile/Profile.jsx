import { useSelector } from "react-redux";
import { useEffect } from "react";
import Topbar from "../../components/topbar/Header";
import ProfilePart from "../../components/ProfilePart/ProfilePart";
import Leftpart from "../../components/LeftSide/leftPart";
import Rightside from "../../components/rightbar/rightbar/rightpart";
import "./profile.css";

export default function Connection({ history }) {
  // const userLogin = useSelector((state) => state.userLogin);

  // const { loading, error, userInfo } = userLogin;
  const userInfo = JSON.parse(localStorage.getItem("user"));
  // console.log(userInfo);
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      console.log(userInfo.name);
    }
  }, [history, userInfo]);

  return (
    <>
      <div>
        {userInfo ? (
          <div>
            <Topbar />
            <div className="homeprofile">
              <Leftpart />
              <ProfilePart />
              <Rightside />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
