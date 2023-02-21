import InsightsStyle from "./userProfile.module.css"
import {
  BarChartOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React from "react";
const {Title, Text } = Typography;

function Insights() {
  return (
    <Row gutter={12} justify="space-between">
      <Col span={7} className={InsightsStyle.insightsCard}>
        <EyeOutlined className={InsightsStyle.insightsIcon} />
        <Text  className={InsightsStyle.insightsNumber} >148</Text>
        <Text>Profile Views</Text>
      </Col>
      <Col span={7}  className={InsightsStyle.insightsCard}>
        <BarChartOutlined className={InsightsStyle.insightsIcon}  />
        <Text className={InsightsStyle.insightsNumber}>2330</Text>
        <Text>Post Interactions</Text>
      </Col>
      <Col span={7}  className={InsightsStyle.insightsCard}>
        <SearchOutlined  className={InsightsStyle.insightsIcon} />
        <Text className={InsightsStyle.insightsNumber}>35</Text>
        <Text>Search Appearences</Text>
      </Col>
    </Row>
  );
}

export default Insights;
