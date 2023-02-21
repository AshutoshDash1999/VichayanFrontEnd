import Topbar from "../../components/topbar/Header";
import Leftpart from "../../components/LeftSide/ConnectionLeft";
import UsersPart from "../../components/Connection/usersPart";
import "./connection.css";

export default function Users(props) {
  const { connection } = props;
  return (
    <>
      <Topbar />
      <div className="homeContainer" style={{width:"100vw"}}>
        <Leftpart connection={connection} from="fr" />
        <UsersPart connection={connection} />
      </div>
    </>
  );
}
