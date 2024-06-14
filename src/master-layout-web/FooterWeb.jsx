import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

function FooterWebMemo() {
  return (
    <div
      style={{
        background: "rgb(246, 249, 252)",
        padding: "10px 0",
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" span={16}>
            <h3>QUICKLINKS</h3>
          </Col>

          <Col className="gutter-row" span={4}>
            <h3>FOLLOW US</h3>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" span={4}>
            <div>Lorem Ipsum</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>Lorem Ipsum</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>Lorem Ipsum</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>Lorem Ipsum</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <FacebookOutlined /> Lorem Ipsum
            </div>
            <div>
              <InstagramOutlined /> Lorem Ipsum
            </div>
            <div>
              <YoutubeOutlined /> Lorem Ipsum
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          background: "#fff",
          textAlign: "center",
          padding: 10,
          marginTop: 40,
        }}
      >
        Piseth Shop © 2020. All Rights Reserved
      </div>
    </div>
  );
}

const FooterWeb = React.memo(FooterWebMemo);
export default FooterWeb;
