import { Carousel, Col, Row } from "antd";
import React from "react";
import Slide1 from "./image-slide/slide1.jpg";
import Slide2 from "./image-slide/slide2.jpg";
import Slide3 from "./image-slide/slide3.jpg";
import Slide4 from "./image-slide/slide4.jpg";
import Small1 from "./image-slide/small1.jpg";
import Small2 from "./image-slide/small2.jpg";
import "./slide.css";

export default function Slide() {
  return (
    <div>
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <Row gutter={16}>
          <Col className="gutter-row" span={18}>
            <Carousel autoplay>
              <div>
                <div style={{ maxHeight: 300 }}>
                  <img
                    style={{ objectFit: "content", width: "100%" }}
                    src={Slide1}
                    alt="banner"
                  />
                </div>
              </div>
              <div>
                <div style={{ maxHeight: 300 }}>
                  <img
                    style={{ objectFit: "content", width: "100%" }}
                    src={Slide2}
                    alt="banner"
                  />
                </div>
              </div>
              <div>
                <div style={{ maxHeight: 300 }}>
                  <img
                    style={{ objectFit: "content", width: "100%" }}
                    src={Slide3}
                    alt="banner"
                  />
                </div>
              </div>
              <div>
                <div style={{ maxHeight: 300 }}>
                  <img
                    style={{ objectFit: "content", width: "100%" }}
                    src={Slide4}
                    alt="banner"
                  />
                </div>
              </div>
            </Carousel>
          </Col>
          <Col className="gutter-row" span={6}>
            <Carousel autoplay>
              <div>
                <div style={{ maxHeight: 300 }}>
                  <img
                    style={{ objectFit: "content", width: "100%" }}
                    src={Small1}
                    alt="banner"
                  />
                </div>
              </div>
              <div>
                <div style={{ maxHeight: 300 }}>
                  <img
                    style={{ objectFit: "content", width: "100%" }}
                    src={Small2}
                    alt="banner"
                  />
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
}