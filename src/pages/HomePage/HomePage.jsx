import { Col, Row, Space } from "antd";
import BaseLayout from "../../components/BaseLayout/BaseLayout";

import CreatePost from "../../components/CreatePost/CreatePost";
import Posts from "../../components/Posts/Posts";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function HomePage() {
  return (
    <BaseLayout activeKey={["1"]}>
      <Row justify="space-evenly" gutter={32}>
        <CreatePost />
        <Col span={14}>
          <Space direction="vertical">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </Space>
        </Col>
        <Col span={8}>
          <ProfileCard />
        </Col>
      </Row>
    </BaseLayout>
  );
}
