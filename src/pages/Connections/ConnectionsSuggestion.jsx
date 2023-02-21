import React from "react";
import { Col, Divider, Row, Typography } from "antd";
import ConnectionCard from "./ConnectionCard";
const { Title } = Typography;

function ConnectionsSuggestion() {
  return (
    <Row>
      <Title level={3}>People you might know</Title>
      <Divider />
      <Row gutter={32}>
        <Col span={8} flex={2}>
          <ConnectionCard
            name="Khushi Kota"
            profilePic="https://joeschmoe.io/api/v1/random"
            designation="graphic designer"
            connectionMode="suggestion"
          />
        </Col>
        <Col span={8}>
          <ConnectionCard
            name="Khushi Kota"
            profilePic="https://joeschmoe.io/api/v1/random"
            designation="graphic designer"
            connectionMode="suggestion"
          />
        </Col>
        <Col span={8}>
          <ConnectionCard
            name="Khushi Kota"
            profilePic="https://joeschmoe.io/api/v1/random"
            designation="graphic designer"
            connectionMode="suggestion"
          />
        </Col>
      </Row>
    </Row>
  );
}

export default ConnectionsSuggestion;
