import { Divider, Typography } from "antd";
import React from "react";
import SearchProfileCard from "./SearchProfileCard";
import SimilarResultStyles from "./searchResults.module.css";
const { Title } = Typography;

function SimilarSeaches() {
  return (
    <div className={SimilarResultStyles.similarResultSection}>
      <Title style={{textAlign:"left", padding:"1rem"}} level={3}>Similar Searches:</Title>
      <Divider/>
      <SearchProfileCard/>
      <SearchProfileCard/>
    </div>
  );
}

export default SimilarSeaches;
