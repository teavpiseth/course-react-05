import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Space } from "antd";
import React from "react";
import Logo from "./logo.jpg";

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
        <Row gutter={16} style={{ alignItems: "center" }}>
          <Col className="gutter-row" span={6}>
            <img
              style={{
                maxWidth: 150,
                float: "right",
                borderRadius: 25,
                cursor: "pointer",
              }}
              src={Logo}
              alt="logo"
              onClick={() => {}}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <Space.Compact
              style={{
                width: "100%",
              }}
            >
              <Input size="large" />
              <Button size="large" type="primary">
                Search
              </Button>
            </Space.Compact>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ display: "flex", cursor: "pointer" }}>
              <div
                style={{
                  background: "#f6f9fc",
                  padding: "9px 11px",
                  borderRadius: "50px",
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
      
      </div>
    </>
  );
}

const HeaderWeb = React.memo(HeaderWebMemo);
export default HeaderWeb;
