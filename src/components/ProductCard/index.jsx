import React from "react";
import Image from "@/images/user/woman/71.jpg";
import Meta from "antd/es/card/Meta";
import { Card } from "antd";

const ProductCard = React.memo(function ProductCard() {
  return (
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
          src={Image}
        />
      }
    >
      <Meta
        title={"Iphone 12"}
        style={{
          marginBottom: 25,
        }}
      />
      {Number(30) > 0 && (
        <span
          style={{
            color: "blue",
            display: "block",
            border: "1px solid",
            marginBottom: 10,
            borderRadius: 5,
          }}
        >
          {30}$ Off
        </span>
      )}
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
        <span> {29} $</span>
        {Number(20) > 0 && (
          <span
            style={{
              color: "black",
              marginLeft: 30,
              textDecoration: "line-through",
            }}
          >
            1000 $
          </span>
        )}
      </div>
      <span
        style={{
          textAlign: "left",
          width: "100%",
          display: "block",
        }}
      >
        Description
      </span>
    </Card>
  );
});

export default ProductCard;
