import Topbar from "../../components/topbar/Header";
import Leftpart from "../../components/LeftSide/ConnectionLeft";
import ConnectionPart from "../../components/Connection/connectionPart";
import "./connection.css";

export default function Connection(props) {
  const { connection, auth } = props;
  return (
    <>
      <Topbar />
      <div className="homeContainer" style={{width:"100vw"}}>
        <Leftpart connection={connection} />
        <ConnectionPart connection={connection} auth={auth}  />
      </div>
    </>
  );
}
