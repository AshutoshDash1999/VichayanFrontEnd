import Topbar from "../../components/topbar/Header";
import ChartPart from "../../components/Chart/chartPart";
import { connect } from "react-redux";
import { useEffect } from "react";

function Messenger({ connection, auth }) {
  console.log(connection);
  return (
    <>
      <Topbar />
      <ChartPart users={connection.allConnections} auth={auth} />
    </>
  );
}

export const mapStateToProps = (store) => {
  return {
    auth: store.auth,
    connection: store.connection,
  };
};

export default connect(mapStateToProps, null)(Messenger);
