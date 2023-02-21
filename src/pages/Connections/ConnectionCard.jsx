import React from "react";
import ConnectionCardStyle from "./Connections.module.css";
import { Avatar, Button, Col, Image, Row, Typography } from "antd";
import { useState } from "react";
const { Title } = Typography;

const ConnectionRequest = () => {
  return (
    <Row gutter={8}>
      <Col span={12}>
        <Button block className={ConnectionCardStyle.acceptConnection}>
          Accept
        </Button>
      </Col>
      <Col span={12}>
        <Button block className={ConnectionCardStyle.rejectConnection}>
          Decline
        </Button>
      </Col>
    </Row>
  );
};

const ConnectionAccepted = () => {
  return (
    <Row>
      <Button block className={ConnectionCardStyle.acceptConnection}>
        Connected
      </Button>
    </Row>
  );
};

const ConnectionRejected = () => {
  return (
    <Row>
      <Button block className={ConnectionCardStyle.rejectConnection}>
        Rejected
      </Button>
    </Row>
  );
};

const ConnectionSuggestion = () => {
  return (
    <Row>
      <Button block className={ConnectionCardStyle.acceptConnection}>
        Connect
      </Button>
    </Row>
  );
};

function ConnectionCard({ name, profilePic, designation, connectionMode }) {
  return (
    <div className={ConnectionCardStyle.connectionCard}>
      <Row gutter={8} justify="start">
        <Col span={6}>
          <Avatar size={64} src={<Image src={profilePic} />} />
        </Col>
        <Col span={18} justify="start">
          <Title className={ConnectionCardStyle.textContent} level={5}>
            {name}
          </Title>
          <Title
            className={ConnectionCardStyle.textContent}
            type="secondary"
            level={5}
          >
            {designation}
          </Title>
        </Col>
      </Row>
      <div className={ConnectionCardStyle.actionDiv}>
        {connectionMode === "request" ? (
          <ConnectionRequest />
        ) : (
          <ConnectionSuggestion />
        )}
      </div>
    </div>
  );
}

export default ConnectionCard;
