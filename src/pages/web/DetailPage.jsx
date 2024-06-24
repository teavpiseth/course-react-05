import { Col, Row } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { Image } from "antd";

const DetailPage = React.memo(function DetailPage() {
  const data = useLocation();
  const { Description, DiscountAmount, Qty, NetPrice, Name, images } =
    data.state;
  const [bigImage, setBigImage] = useState(images[0]);

  console.log(data);
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: 20 }}>
      <Row>
        <Col span={12}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ width: 80 }}>
              {images?.map((src) => {
                return (
                  <img
                    onClick={() => setBigImage(src)}
                    style={{ width: 80 }}
                    key={src}
                    src={"https://piseth.site/api/get-image/" + src}
                  />
                );
              })}
            </div>
            <div style={{ width: "80%" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={"https://piseth.site/api/get-image/" + bigImage}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: 20 }}>Product: {Name}</p>
          <p>Price {NetPrice}</p>
          <p style={{ textDecoration: "line-through" }}>
            Discount: {DiscountAmount}
          </p>
          <p>Qty: {Qty}</p>
          <p>Description: {Description}</p>
        </Col>
      </Row>
    </div>
  );
});

export default DetailPage;
