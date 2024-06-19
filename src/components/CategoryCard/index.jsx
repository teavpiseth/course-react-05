import React from "react";
import Image from "@/images/user/woman/71.jpg";

const CategoryCard = React.memo(function CategoryCard() {
  return (
    <div
      className="animate__animated animate__fadeInLeft"
      style={{
        margin: "5px",
        height: "100%",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        boxShadow: "-1px 11px 9px -10px #93a7c3b8",
        borderRadius: 10,
        border: "1px solid #e6ebef",
      }}
    >
      <img
        style={{ maxWidth: "100%", maxHeight: 80, margin: "auto" }}
        src={Image}
      />
      <span
        style={{
          display: "block",
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "rgb(41 124 213 / 9%)",
        }}
      >
        Test
      </span>
    </div>
  );
});

export default CategoryCard;
