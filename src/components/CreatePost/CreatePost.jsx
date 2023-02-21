import PostModalStyles from "./createpost.module.css";
import {
  FileImageOutlined,
  FileTextOutlined,
  FormOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  message,
  Row,
  Space,
  Typography,
  Upload,
  Modal,
  Tooltip,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
const { Title } = Typography;

function CreatePost() {
  const props = {
    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const showCreatePostModal = () => {
    setIsPostModalOpen(true);
  };

  const postContent = () => {
    setIsPostModalOpen(false);
  };

  const cancelPost = () => {
    setIsPostModalOpen(false);
  };

  return (
    <div>
      <Button
        className={PostModalStyles.createPostButton}
        type="primary"
        onClick={showCreatePostModal}
        shape="circle"
        size="large"
      >
        <FormOutlined />
      </Button>
      <div style={{ background: "red" }}>
        <Modal
          title="Create Post"
          open={isPostModalOpen}
          onOk={postContent}
          onCancel={cancelPost}
          footer={null}
          className={PostModalStyles.modal}
        >
          <Row align="middle">
            <Space align="center">
              <Avatar size={40} src="https://joeschmoe.io/api/v1/random" />
              <Title level={5}>Pallavi Mahakud</Title>
            </Space>
          </Row>

          <Row className={PostModalStyles.textArea}>
            <TextArea
              bordered={false}
              rows={4}
              placeholder="Type something..."
            />
          </Row>

          <Row justify="space-between">
            <Space>
              <Upload {...props}>
                <Tooltip title="Upload document">
                  <Button
                    icon={
                      <FileTextOutlined className={PostModalStyles.postIcon} />
                    }
                    type="text"
                  ></Button>
                </Tooltip>
              </Upload>
              <Upload {...props}>
                <Tooltip title="Upload image">
                  <Button
                    icon={
                      <FileImageOutlined className={PostModalStyles.postIcon} />
                    }
                    type="text"
                  ></Button>
                </Tooltip>
              </Upload>
              <Upload {...props}>
                <Tooltip title="Upload video">
                  <Button
                    icon={
                      <VideoCameraOutlined
                        className={PostModalStyles.postIcon}
                      />
                    }
                    type="text"
                  ></Button>
                </Tooltip>
              </Upload>
            </Space>

            <Button onClick={postContent} className={PostModalStyles.postBtn}>
              Post
            </Button>
          </Row>
        </Modal>
      </div>
    </div>
  );
}

export default CreatePost;
