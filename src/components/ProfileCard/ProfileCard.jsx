import ProfileCardStyle from "./profileCard.module.css";
import { Avatar, Button, Col, Row, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;

function ProfileCard() {
  return (
    <div className={ProfileCardStyle.profileCard}>
      <Row justify="center" align="middle">
        <Col>
          <Avatar size={70} src="https://joeschmoe.io/api/v1/random" />
          <Title level={3}>Pallavi Mohakud</Title>
          <Text type="secondary">Researcher</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div>
            <Text className={ProfileCardStyle.profileStats} strong>
              200
            </Text>
          </div>
          <div>
            <Text>Followers</Text>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Text className={ProfileCardStyle.profileStats} strong>
              800
            </Text>
          </div>
          <div>
            <Text>Followings</Text>
          </div>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Button size="large" className={ProfileCardStyle.followingBtn}>View Profile</Button>
      </Row>
    </div>
  );
}

export default ProfileCard;
