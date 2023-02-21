import { Row, Space, Typography } from "antd";
import React from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import NotificationCard from "./NotificationCard";
const { Title } = Typography;

function Notifications() {
  return (
    <BaseLayout activeKey={["6"]}>
      <Row>
        <Title level={3}>Notifications</Title>
      </Row>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </Space>
    </BaseLayout>
  );
}

export default Notifications;
