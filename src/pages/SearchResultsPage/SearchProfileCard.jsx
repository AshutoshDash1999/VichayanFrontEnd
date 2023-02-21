import { Avatar, Button, Space, Typography } from "antd";
import React from "react";
import SearchResultStyles from "./searchResults.module.css";
const { Title, Text } = Typography;

function SearchProfileCard() {
  return (
    <div className={SearchResultStyles.profileCard}>
      <div className={SearchResultStyles.profileCardContent}>
        <Space size="large">
          <Avatar size={80} src="https://joeschmoe.io/api/v1/random" />
          <div className={SearchResultStyles.profileInfo}>
            <Title className={SearchResultStyles.profileTitle} level={4}>Khushi Kota</Title>
            <Title className={SearchResultStyles.profileTitle} level={5} type="secondary">UI/UX Designer</Title>

            <p className={SearchResultStyles.profileText}>
              “Lorem ipsum dolor sit amet, consecr adipiscing elit ut aliquam”
            </p>
          </div>
          <div>
            <Button type="primary" className={SearchResultStyles.button}>
              Connect
            </Button>
          </div>
          <div>
            <Button type="primary" className={SearchResultStyles.button}>
              Explore Page
            </Button>
          </div>
        </Space>
      </div>
    </div>
  );
}

export default SearchProfileCard;
