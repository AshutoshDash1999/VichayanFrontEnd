import UserProfileStyles from "./userProfile.module.css";
import { Avatar, Col, Row, Tabs, Typography } from "antd";
import React from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import Insights from "./Insights";
import UserPosts from "./UserPosts";
const { Title, Text } = Typography;

function UserProfile() {
  return (
    <BaseLayout>
      <div>
        <Row justify="space-evenly" align="top" gutter={24}>
          <Col span={6} className={UserProfileStyles.profileInfo}>
            <Row>
              <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
            </Row>
            <Row>
              <Title level={4}>Pallavi Mohakud</Title>
            </Row>
            <Row>
              <Text>UI/UX Designer</Text>
            </Row>
            <Row>
              <Text type="secondary">Bhbubaneswar, Odisha</Text>
            </Row>
            <Row>
              <Title level={4}>About</Title>
            </Row>
            <Row justify="start" align="top">
              <Col span={24}>
                <p className={UserProfileStyles.profileAbout}>
                  Lorem ipsum dolor sit amet, consecr adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </Col>
            </Row>
            <Row>
              <Title level={4}>Education</Title>
            </Row>
            <Row justify="start" align="top">
              <Col span={24}>
                <p className={UserProfileStyles.profileAbout}>
                  Lorem ipsum dolor sit amet, consecr adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </Col>
            </Row>
            <Row>
              <Title level={4}>Experience</Title>
            </Row>
            <Row justify="start" align="top">
              <Col span={24}>
                <p className={UserProfileStyles.profileAbout}>
                  Lorem ipsum dolor sit amet, consecr adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </Col>
            </Row>
            <Row>
              <Title level={4}>Skills</Title>
            </Row>
            <Row justify="start" align="top">
              <Col span={24}>
                <p className={UserProfileStyles.profileAbout}> 
                  Lorem ipsum dolor sit amet, consecr adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: `All Activity`,
                  key: "1",
                  children: <UserPosts />,
                },
                {
                  label: `Posts`,
                  key: "2",
                  children: `Content of Tab Pane 2`,
                },
                {
                  label: `Research Papers`,
                  key: "3",
                  children: `Content of Tab Pane 3`,
                },
                {
                  label: `Insights`,
                  key: "4",
                  children: <Insights />,
                },
                {
                  label: `Drafts`,
                  key: "5",
                  children: `Content of Drafts Pane`,
                },
              ]}
            />
          </Col>
        </Row>
      </div>
    </BaseLayout>
  );
}

export default UserProfile;
