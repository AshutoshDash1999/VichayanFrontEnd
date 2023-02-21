import MessageCardStyle from "./messages.module.css";
import { Badge, Col, Row, Typography } from "antd";
import React from "react";
import { Avatar } from "antd";
const { Title } = Typography;

function MessageCard({ profilePic, name, isActive, unreadMessagesCount }) {
  return (
    <div className={isActive ? MessageCardStyle.isActiveCard : MessageCardStyle.messageCard}>
      <div className={MessageCardStyle.messageCardInfo}>
        <Row justify="start" align="middle">
          <div>
            <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
          </div>
          <div>
            <Title className={isActive? MessageCardStyle.isNameActive: ""} level={4}>Miguel</Title>
          </div>
        </Row>
        <div>{isActive ? "" : <Badge count={25} />}</div>
      </div>
      <p className={MessageCardStyle.dateTime}>{isActive?"":"12:35"}</p>
    </div>
    // <div
    //   className={
    //     isActive ? MessageCardStyle.isActiveCard : MessageCardStyle.messageCard
    //   }
    // >
    //   <div className={MessageCardStyle.messageUserInfo}>
    //     <div span={10}>
    //       <Avatar size={60} src="https://joeschmoe.io/api/v1/random" />
    //     </div>
    //     <div span={12}>
    //       <Title level={4}>Miguel</Title>
    //     </div>
    //   </div>
    //   <div span={2}>{isActive ? "" : <Badge count={25} />}</div>
    // </div>
  );
}

export default MessageCard;
