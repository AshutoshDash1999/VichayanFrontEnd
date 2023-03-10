import Topbar from "../../components/topbar/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostCont from "../../containers/post/postCont";
import Leftpart from "../../components/LeftSide/HomeLeftPart";
import Rightside from "../../components/rightbar/rightbar/rightpart";
import "./home.css";

export default function Home({ history }) {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  // window.onload = function () {
  //   if (!window.location.hash) {
  //     window.location = window.location + "#loaded";
  //     window.location.reload();
  //   }
  // };
  // let temp = 1;

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/login");
  //   }
  // }, [history, userInfo]);

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftpart />
        <PostCont />
        <Rightside />
      </div>
    </>
  );
}
