import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import ConnectionCard from "./ConnectionCard";
const { Title } = Typography;

function ConnectionRequest() {
  return (
    <Row>
      <Title level={3}>Connection Requests</Title>
      <Divider />
      <Row gutter={32}>
        <Col span={8} flex={2}>
          <ConnectionCard
            name="Khushi Kota"
            profilePic="https://joeschmoe.io/api/v1/random"
            designation="graphic designer"
            connectionMode="request"
          />
        </Col>
        <Col span={8}>
          <ConnectionCard
            name="Khushi Kota"
            profilePic="https://joeschmoe.io/api/v1/random"
            designation="graphic designer"
            connectionMode="request"
          />
        </Col>
        <Col span={8}>
          <ConnectionCard
            name="Khushi Kota"
            profilePic="https://joeschmoe.io/api/v1/random"
            designation="graphic designer"
            connectionMode="request"
          />
        </Col>
      </Row>
    </Row>
  );
}

export default ConnectionRequest;
