import React from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import ConnectionRequest from "./ConnectionRequest";
import ConnectionsSuggestion from "./ConnectionsSuggestion";

function Connections() {
  return (
    <BaseLayout  activeKey={["3"]}>
      <ConnectionRequest />
      <br />
      <ConnectionsSuggestion />
    </BaseLayout>
  );
}

export default Connections;
