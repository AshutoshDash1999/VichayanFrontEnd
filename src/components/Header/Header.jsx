import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Row } from "antd";
import React from "react";
import HeaderStyles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Row
      className={HeaderStyles.headerRow}
      align="middle"
      justify="space-between"
    >
      <Row className={HeaderStyles.searchDiv} justify="space-between">
        <input
          className={HeaderStyles.searchInput}
          type="text"
          placeholder="Search..."
        />
        <Button
          className={HeaderStyles.searchBtn}
          size="large"
          icon={<SearchOutlined className={HeaderStyles.searchIcon} />}
          type="text"
        ></Button>
      </Row>
      <div>
        <Link to="/profile">
          <Avatar
            className={HeaderStyles.avatar}
            size={60}
            src="https://joeschmoe.io/api/v1/random"
          />
        </Link>
      </div>
    </Row>
  );
}

export default Header;
