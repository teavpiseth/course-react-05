import { Card, Col, Row } from "antd";
import React from "react";
import Slide from "./image-slide/slide1.jpg";
import Meta from "antd/es/card/Meta";

export default function Product() {
  return (
    <div style={{ maxWidth: 1100, margin: "auto" }}>
      <h2 style={{ fontWeight: 400, margin: "50px 0" }}>Product</h2>
      <Row gutter={4}>
        <Col
          className="gutter-row"
          span={6}
          style={{ textAlign: "center", marginBottom: 15 }}
        >
          <a href="/detail">
          <Card
            className="animate__animated animate__fadeInLeft"
            hoverable
            style={{
              width: 240,
            }}
            onClick={() => {}}
            cover={
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: 100,
                  objectFit: "contain",
                  marginTop: 15,
                }}
                src={Slide}
              />
            }
          >
            <Meta
              title={"test"}
              style={{
                marginBottom: 25,
              }}
            />
            {/* {Number(pro.DiscountAmount) > 0 && (
                    <span
                      style={{
                        color: "blue",
                        display: "block",
                        border: "1px solid",
                        marginBottom: 10,
                        borderRadius: 5,
                      }}
                    >
                      {pro.DiscountAmount}$ Off
                    </span>
                  )} */}
            <div
              style={{
                color: "#f34770",
                textAlign: "left",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <span> 100 $</span>
              {/* {Number(pro.DiscountAmount) > 0 && (
                      <span
                        style={{
                          color: "black",
                          marginLeft: 30,
                          textDecoration: "line-through",
                        }}
                      >
                        {pro.Price} $
                      </span>
                    )} */}
            </div>
            <span
              style={{
                textAlign: "left",
                width: "100%",
                display: "block",
              }}
            >
              test
            </span>
          </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
}
