import {
  HomeOutlined,
  BookOutlined,
  GlobalOutlined,
  WechatOutlined,
  ShoppingOutlined,
  BellOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { Layout, Menu, Modal } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "../../customAnt.css";
import styles from "./BaseLayout.module.css";
import vichLogo from "../../assets/vichLogo.svg";
import DashboardHeader from "../../components/Header/Header";
import { logOutUser } from "../../Redux/actions/authActions";
import { Link, useHistory } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: 1,
    icon: React.createElement(HomeOutlined),
    label: (<Link to="/">Home</Link>)
  },
  {
    key: 2,
    icon: React.createElement(BookOutlined),
    label: "Library"
  },
  {
    key: 3,
    icon: React.createElement(GlobalOutlined),
    label: (<Link to="/connections">Connection</Link>)
  },
  {
    key: 4,
    icon: React.createElement(WechatOutlined),
    label: (<Link to="/messages">Chats</Link>)
  },
  {
    key: 5,
    icon: React.createElement(ShoppingOutlined),
    label: "Jobs"
  },
  {
    key: 6,
    icon: React.createElement(BellOutlined),
    label: (<Link to="/notification">Notifications</Link>)
  }
];

const logoutBtn = [
  {
    key: 1,
    icon: React.createElement(LogoutOutlined),
    label: "Logout"
  }
];

const { confirm } = Modal;

function showLogOutConfirm(history) {
  confirm({
    title: "Do you want to logout?",
    icon: <ExclamationCircleOutlined />,
    content: "You need to re-enter your credentials to use this portal!",
    onOk() {
      logOutUser(history);
    }
  });
}

const BaseLayout = ({ children, activeKey }) => {
  const history = useHistory();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
        <div style={{ paddingBottom: "2rem" }}>
          <img className={styles.logo} src={vichLogo} alt="logo"></img>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />

        <Menu
          className={styles.logout_row}
          theme="light"
          mode="inline"
          onClick={() => showLogOutConfirm(history)}
          items={logoutBtn}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200
        }}
      >
        <DashboardHeader />
        <Content
          style={{
            margin: "2px 16px 0",
            overflow: "initial"
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: "center"
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
