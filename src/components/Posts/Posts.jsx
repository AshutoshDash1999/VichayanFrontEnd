import PostsStyle from "./posts.module.css"
import { CommentOutlined, LikeOutlined, SaveOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Image, Row, Space, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;

function Posts() {
  return (
    <div className={PostsStyle.posts}>
      <Row align="middle" justify="start">
        <Space align="center">
          <Avatar size={40} src="https://joeschmoe.io/api/v1/random" />
          <div className={PostsStyle.userInfo}>
            <Title level={5}>Pallavi Mohakud</Title>
            <Text type="secondary" className={PostsStyle.userBio}>Researcher</Text>
          </div>
        </Space>
      </Row>
      <div className={PostsStyle.postContent}>
        <div className={PostsStyle.postText}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus, lorem ipsum..
          </Text>
        </div>
        <div>
          <Image
          className={PostsStyle.postImage}
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <Divider />
        <Row justify="space-between">
          <Space>
            <Button type="text" size="large" icon={<LikeOutlined className={PostsStyle.postIcon} />}></Button>
            <Button type="text" size="large" icon={<CommentOutlined className={PostsStyle.postIcon} />}></Button>
            <Button type="text" size="large" icon={<SendOutlined className={PostsStyle.postIcon} />}></Button>
          </Space>

          <Button type="text" size="large" icon={<SaveOutlined className={PostsStyle.postIcon} />}></Button>
        </Row>
      </div>
    </div>
  );
}

export default Posts;
