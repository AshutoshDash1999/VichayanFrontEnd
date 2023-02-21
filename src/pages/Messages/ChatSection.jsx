import { PaperClipOutlined, SendOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Input,
  Row,
  Typography,
  Upload,
} from "antd";
import React from "react";
import ChatStyles from "./messages.module.css";
const { Title } = Typography;

function ChatSection() {
  return (
    <div className={ChatStyles.chatSection}>
      <Row justify="start" align="middle">
        <Col span={2}>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
        </Col>
        <Col>
          <Title level={4}>Miguel</Title>
        </Col>
      </Row>
      <Divider />

      <div className={ChatStyles.chats}>
        <div className={ChatStyles.receiverText}>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
          <p className={ChatStyles.receiverChat}>receiver text</p>
        </div>

        <div className={ChatStyles.senderText}>
          <p className={ChatStyles.senderChat}>sender text</p>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={ChatStyles.senderText}>
          <p className={ChatStyles.senderChat}>sender text</p>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={ChatStyles.receiverText}>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
          <p className={ChatStyles.receiverChat}>receiver text</p>
        </div>

        <div className={ChatStyles.senderText}>
          <p className={ChatStyles.senderChat}>sender text</p>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={ChatStyles.receiverText}>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
          <p className={ChatStyles.receiverChat}>receiver text</p>
        </div>
        <div className={ChatStyles.receiverText}>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
          <p className={ChatStyles.receiverChat}>receiver text</p>
        </div>

        <div className={ChatStyles.senderText}>
          <p className={ChatStyles.senderChat}>sender text</p>
          <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
        </div>
      </div>

      <Divider />
      <Row className={ChatStyles.inputRow} align="middle">
        <Col span={20}>
          <Input
            placeholder="Write your messages..."
            size="large"
            bordered={false}
          />
        </Col>
        <Col span={2}>
          <Upload>
            <Button
              icon={<PaperClipOutlined className={ChatStyles.attachInputIcon} />}
              type="text"
              size="large"
            ></Button>
          </Upload>
        </Col>
        <Col span={2}>
          <Button
            className={ChatStyles.sendMessage}
            icon={<SendOutlined className={ChatStyles.sendInputIcon}/>}
            size="large"
          ></Button>
        </Col>
      </Row>
    </div>
  );
}

export default ChatSection;
