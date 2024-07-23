import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import styles from "./login.module.scss";
import { useNavigate } from "react-router";
import LoginService from "./LoginService";
import LocalStorage from "@/utils/LocalStorage";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log("Success:", values);
    setIsLoading(true);
    const res = await LoginService.login(values);
    setIsLoading(false);
    if (!res?.error) {
      LocalStorage.setUserInfo(res);
      return navigate("/dashboard");
    }

    message.error(res?.message, [2]);
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className={styles.wrapLogin}>
        <h3 style={{ textAlign: "center", fontSize: 20 }} className="mb-5">
          Login
        </h3>
        <div className={styles.login}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                disabled={isLoading}
                loading={isLoading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default React.memo(Login);
