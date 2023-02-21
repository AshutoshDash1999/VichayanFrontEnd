import Topbar from "../../components/topbar/Header";
import Leftpart from "../../components/LeftSide/NotificationLeft";
import NotificationPart from "../../components/Notification/NotificationPart";

export default function Notification({ history }) {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftpart />
        <NotificationPart />
      </div>
    </>
  );
}
