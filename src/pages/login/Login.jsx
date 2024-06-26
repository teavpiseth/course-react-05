import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./login.module.scss";
import { Navigate, useNavigate } from "react-router";
import LoginService from "./LoginService";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);

    const res = await LoginService.login(values);
    if (!res?.error) {
      navigate("/dashboard");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              <Button type="primary" htmlType="submit">
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
