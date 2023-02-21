import React, { useState } from "react";
import { loginUser } from "../../Redux/actions/authActions";
import signInStyles from "./signin.module.css";
import {
  Col,
  Form,
  Row,
  Typography,
  Button,
  Checkbox,
  Input,
  Card
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import VichayanLogo from "../../assets/VICHAYAN_LOGO-01.png";
import SignInImg from "../../assets/signin-img.png";
import GoogleLogo from "../../assets/google-logo.svg";

const { Title, Text } = Typography;

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push("/OTP");
  //   }
  // }, [history, userInfo]);

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  return (
    <div className={signInStyles.signIn_page}>
      <Row justify="center" align="middle">
        <Col span={12} className={signInStyles.left}>
          <div className="signIn-left-img">
            <img
              className={signInStyles.signIn_left_img}
              src={SignInImg}
              alt="SignInImg"
            />
          </div>
        </Col>
        <Col span={12} className="right">
          <div className={signInStyles.logoDiv}>
            <img
              className={signInStyles.logo}
              src={VichayanLogo}
              alt="VichayanLogo"
            />
          </div>
          <div className={signInStyles.signIn_form}>
            <Card className={signInStyles.signIn_card}>
              <Title level={2}>Sign In</Title>
              <p className={signInStyles.signInText}>
                Welcome back! Please enter your details.
              </p>
              <Form
                name="normal_login"
                className={signInStyles.login_form}
                initialValues={{
                  remember: true
                }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!"
                    }
                  ]}
                >
                  <Input
                    className={signInStyles.inputForm}
                    prefix={
                      <UserOutlined
                        className={signInStyles.site_form_item_icon}
                      />
                    }
                    placeholder="Username"
                    name="email"
                    size="large"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!"
                    }
                  ]}
                >
                  <Input.Password
                    className={signInStyles.inputForm}
                    prefix={
                      <LockOutlined
                        className={signInStyles.site_form_item_icon}
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={signInStyles.login_form_button}
                    size="large"
                    block
                    onClick={() => {
                      loginUser(email, password, history);
                    }}
                  >
                    Sign In
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    className={signInStyles.login_form_with_google}
                    htmlType="submit"
                    size="large"
                    block
                    name="submit"
                    value="Sign In"
                    onClick={() => {
                      loginUser(email, password, history);
                    }}
                  >
                    <Row justify="center" align="middle">
                      <img src={GoogleLogo} alt="GoogleLogo" />
                      Sign In with Google
                    </Row>
                  </Button>
                </Form.Item>
                <Row justify="center">
                  <Text>
                    Don’t have an account? &nbsp;
                    <Link to="/register">
                      <a href="" className="link-item">
                        Sign up.
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
};

export default Signin;
