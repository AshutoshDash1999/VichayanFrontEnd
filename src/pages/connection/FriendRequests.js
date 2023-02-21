import Topbar from "../../components/topbar/Header";
import Leftpart from "../../components/LeftSide/ConnectionLeft";
import RequestPart from "../../components/Connection/requestPart";
import "./connection.css";

export default function FriendRequests(props) {
  const { connection } = props;
  return (
    <>
      <Topbar />
      <div className="homeContainer" style={{width:"100vw"}}>
        <Leftpart connection={connection} from="fr" />
        <RequestPart connection={connection} from="fr" />
      </div>
    </>
  );
}
