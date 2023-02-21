import NotificationCardStyle from "./notifications.module.css";
import { Avatar, Col, Row, Space, Typography } from "antd";
import React from "react";
const { Text } = Typography;

function NotificationCard({ pic, name, timeDate }) {
  return (
    <div className={NotificationCardStyle.notificationCard}>
      <div className={NotificationCardStyle.notificationContent}>
          <div>
            <Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
          </div>
          <div className={NotificationCardStyle.notificationText}>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. lore
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. lore
            </Text>
          </div>
      </div>
      <div className={NotificationCardStyle.time}>
        <Text strong >
          1min ago
        </Text>
      </div>
      {/* <Row justify="space-between" gutter={20}>
        <Col>
          <Avatar size={50} src="https://joeschmoe.io/api/v1/random" />
          <Text className={NotificationCardStyle.notificationText} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. lore 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. lore 
          </Text>
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row justify="end">
        <Text strong className={NotificationCardStyle.time}>1min ago</Text>
      </Row> */}
    </div>
  );
}

export default NotificationCard;
