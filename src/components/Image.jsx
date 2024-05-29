/* eslint-disable react/prop-types */
import React from "react";
import image1 from "../images/user/man/28.jpg";

export function Image({ name, image }) {
  for (let index = 0; index < 100000000; index++) {}
  console.log("component image");
  return (
    <>
      <p style={{ backgroundColor: "black", color: "#fff" }}>Name: {name}</p>
      <br></br>
      <img onClick={() => alert("hi")} src={image} alt="man" />
    </>
  );
}

export const MemorizeImage = React.memo(Image);

export default function Description() {
  return <p>test</p>;
}
