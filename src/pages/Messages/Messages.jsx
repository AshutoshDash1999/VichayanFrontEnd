import MessagesStyles from "./messages.module.css"
import { Col, Row, Typography } from "antd";
import React from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import ChatSection from "./ChatSection";
import MessageCard from "./MessageCard";
const { Title } = Typography;

function Messages() {
  return (
    <BaseLayout activeKey={["4"]}>
      <Row>
        <Title level={3}>My Chats</Title>
      </Row>
      <Row gutter={24} justify="space-between">
        <Col span={6} className={MessagesStyles.allChats}>
          <MessageCard isActive={true} />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </Col>
        <Col span={18}>
            <ChatSection/>
        </Col>
      </Row>
    </BaseLayout>
  );
}

export default Messages;
