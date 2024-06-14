import React from "react";
import image1 from "../images/user/man/28.jpg";
import "./image.css";
import PropTypes from 'prop-types';

function Image({ name , image }) {
  // for (let index = 0; index < 1000000000; index++) {}
  console.log("component image");
  return (
    <div className="component-image">
      
      <p style={{ color: "#fff" }} className="font-bold">Name: {name}</p>
      <br></br>
      <img onClick={() => alert("hi")} src={image} alt="man" />
      <span>Description: description product</span>
    </div>
  );
}

Image.propTypes = {
  name: PropTypes.string,
  image: PropTypes.node
}

export const MemorizeImage = React.memo(Image);

export default function Description() {
  return <p>test</p>;
}
