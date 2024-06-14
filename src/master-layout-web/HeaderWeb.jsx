import { HomeOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Input, Menu, Row, Space } from "antd";
import React from "react";
import Logo from "./logo.jpg";
import { Link } from "react-router-dom";

function HeaderWebMemo() {
  return (
    <>
      <div
        style={{
          background: "#f6f9fc",
          padding: "10px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <span>
          <PhoneOutlined /> Tel: 023 216 121/6, 078 311 222, 092 111 333, 078
          911 444
        </span>
      </div>
      <div style={{ padding: 10 }}>
        <Row style={{ alignItems: "center" }}>
          <Col xs={24} sm={12} md={6} lg={6}>
            <img
              style={{
                margin: "auto",
                maxWidth: 150,
                borderRadius: 25,
                cursor: "pointer",
                marginBottom: 10,
              }}
              src={Logo}
              alt="logo"
              onClick={() => {}}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12}>
            <Space.Compact
              style={{
                width: "100%",
                marginBottom: 10,
              }}
            >
              <Input size="large" />
              <Button size="large" type="primary">
                Search
              </Button>
            </Space.Compact>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div
              style={{
                display: "flex",
                cursor: "pointer",
                justifyContent: "end",
              }}
            >
              <div
                style={{
                  background: "#f6f9fc",
                  padding: "9px 11px",
                  borderRadius: "50px",
                  marginRight: 10,
                }}
              >
                <UserOutlined />
              </div>
              <div>
                <span>My Account</span>
                <br />
                <span>Register or Login</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#144194", marginBottom: 25 }}>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: "#144194", maxWidth: 1000, margin: "auto" }}
        >
          <Menu.Item
            key="home"
            icon={<HomeOutlined />}
            style={{ color: "#fff" }}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" style={{ color: "#fff" }}>
            <Link to="/detail">Detail</Link>
          </Menu.Item>
          <Menu.Item
            key="contact"
            icon={<PhoneOutlined />}
            style={{ color: "#fff" }}
          >
            Contact
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
}

const HeaderWeb = React.memo(HeaderWebMemo);
export default HeaderWeb;
