import React, { useState } from "react";
import signUpStyles from "./signup.module.css";

import {
  Col,
  Form,
  Row,
  Typography,
  Button,
  Checkbox,
  Input,
  Card,
  DatePicker,
} from "antd";
import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import VichayanLogo from "../../assets/VICHAYAN_LOGO-01.png";
import SignUpImg from "../../assets/register.svg";
import GoogleLogo from "../../assets/google-logo.svg";

const { Title, Text } = Typography;
export default function Signup({ history, registerUser, auth }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({ short: 'IN' });
  const [date, setDate] = useState(null);

  return (
    <div className={signUpStyles.signUp_page}>
      <Row justify="center" align="middle">
        <Col span={12} className={signUpStyles.left} align="middle">
          <div className="signIn-left-img">
            <img
              className={signUpStyles.signUp_left_img}
              src={SignUpImg}
              alt="SignUpImg"
            />
          </div>
        </Col>
        <Col span={12} className="right">
          <Row justify="end" className={signUpStyles.logo_row}>
            <div className={signUpStyles.logoDiv}>
              <img className={signUpStyles.logo} src={VichayanLogo} alt="VichayanLogo" />
            </div>
          </Row>
          <div className={signUpStyles.signUp_form}>
            <Card className={signUpStyles.signUp_card}>
              <Title level={2}>Sign Up</Title>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
              >
                
                <Form.Item
                  className={signUpStyles.ant_form_item}
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    className={signUpStyles.inputForm}
                    prefix={
                      <UserOutlined
                        className={signUpStyles.site_form_item_icon}
                      />
                    }
                    placeholder="First Name"
                    name="validation password"
                    size="large"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  className={signUpStyles.ant_form_item}
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    className={signUpStyles.inputForm}
                    prefix={
                      <UserOutlined
                        className={signUpStyles.site_form_item_icon}
                      />
                    }

                    placeholder="Last Name"
                    name="validation password"
                    size="large"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  className={signUpStyles.ant_form_item}
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your contact number!",
                    },
                  ]}
                >
                  <Input
                    className={signUpStyles.inputForm}
                    prefix={
                      <PhoneOutlined
                        className={signUpStyles.site_form_item_icon}
                      />
                    }
                    placeholder="Contact"
                    name="phoneNumber"
                    size="large"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  className={signUpStyles.ant_form_item}
                  name="dob"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Date of Birth!",
                    },
                  ]}
                >
                  <DatePicker
                    disabledDate={(current) =>
                      current && current.valueOf() > Date.now()
                    }
                    className={signUpStyles.date}
                    size="large"
                    placeholder="Date of Birth"
                    value={date}
                    onChange={(e) => setDate(e)}
                    format="DD-MMM-YYYY"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    className={signUpStyles.inputForm}
                    prefix={
                      <LockOutlined
                        className={signUpStyles.site_form_item_icon}
                      />
                    }
                    type="password"
                    placeholder="Password"
                    name="password"
                    size="large"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>

                {/* <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className={signUpStyles.inputForm}
                    prefix={
                      <LockOutlined
                        className={signUpStyles.site_form_item_icon}
                      />
                    }

                    type="password"
                    placeholder="Confirm Password"
                    name="password"
                    size="large"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Item> */}

                <Form.Item>
                  <Row justify="space-between">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox className="rememberMe-checkbox">
                        Remember me
                      </Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                  </Row>
                </Form.Item>

                <Form.Item>
                  <Text>
                    By clicking Sign Up, you agree to our Terms, Data Policy and
                    Cookie Policy. You may receieve SMS notification from us and
                    can opt out any time.
                  </Text>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={signUpStyles.signup_form_button}
                    size="large"
                    block
                    onClick={() => {
                      registerUser(firstName, lastName, email, password, confirmPassword, phoneNumber, date, history);
                    }}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    className={signUpStyles.signup_form_with_google}
                    size="large"
                    block
                    name="submit"
                    value="Sign Up"
                  >
                    <Row justify="center" align="middle">
                      <img src={GoogleLogo} alt="GoogleLogo" />
                      Sign Up with Google
                    </Row>
                  </Button>
                </Form.Item>
                <Row justify="center">
                  <Text>
                    Already have an account? &nbsp;
                    <Link to="/login">
                      <a href="" className="link-item">
                        Sign In.
                      </a>
                    </Link>
                  </Text>
                </Row>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}
