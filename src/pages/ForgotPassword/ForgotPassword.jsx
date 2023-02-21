import { MailOutlined } from "@ant-design/icons";
import ForgotPWStyles from "./forgotpw.module.css";
import React, { useState } from "react";
import VichayanLogo from "../../assets/VICHAYAN_LOGO-01.png";
import SignInImg from "../../assets/signin-img.png";
import {
  Col,
  Form,
  Row,
  Typography,
  Button,
  Input,
  Card,
} from "antd";
const { Title } = Typography;

function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className={ForgotPWStyles.signIn_page}>
      <Row justify="center" align="middle">
        <Col span={12} className={ForgotPWStyles.left}>
          <div className="signIn-left-img">
            <img
              className={ForgotPWStyles.signIn_left_img}
              src={SignInImg}
              alt="SignInImg"
            />
          </div>
        </Col>
        <Col span={12} className="right">
          <Row justify="end" className={ForgotPWStyles.logo_row}>
            <div className={ForgotPWStyles.logoDiv}>
              <img
                className={ForgotPWStyles.logo}
                src={VichayanLogo}
                alt="VichayanLogo"
              />
            </div>
          </Row>
          <div className={ForgotPWStyles.signIn_form}>
            <Card className={ForgotPWStyles.signIn_card}>
              <div>
                <Title level={2}>Forgot password?</Title>
                <p className={ForgotPWStyles.signInText}>
                  Please enter your registered email address. You will recieve
                  an OTP to create a new password.
                </p>
              </div>
              <Form
                name="normal_login"
                className={ForgotPWStyles.login_form}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Email!",
                    },
                  ]}
                >
                  <Input
                    className={ForgotPWStyles.inputForm}
                    prefix={
                      <MailOutlined
                        className={ForgotPWStyles.site_form_item_icon}
                      />
                    }
                    placeholder="Please enter your Email"
                    name="email"
                    size="large"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={ForgotPWStyles.login_form_button}
                    size="large"
                    block
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ForgotPassword;
