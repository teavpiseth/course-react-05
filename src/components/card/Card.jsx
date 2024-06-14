/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Image from "../../images/user/man/51.jpg";
import "./card.scss";

const detail =
  "Look for triggers such as these: meetings are rote or uninspiring, people spend more time presenting than doing, rigid practices get in the way, top-down initiatives have no buy-in, imported best practices are not welcome. Any of them is a clear signal that there is a need for changes such as stopping unproductive activities, tapping tacit know-how to stimulate new ideas, discovering local solutions, building trust, and coordinating action.";
const Card = ({onClick}) => {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="card-style" onClick={onClick}>
      <div className="container">
        <div className="product-card">
          <span>1</span>
          <div className="product-image">
            <img src={Image} alt="Product Image" />
          </div>
          <div className="product-details">
            <h2 className="product-title">Awesome Product</h2>
            <h4 className="product-price">$99</h4>
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="view-btn" onClick={() => setIsDetail(!isDetail)}>
              {isDetail ? "Hide" : "Show"} Details
            </button>
            <br/>
            {isDetail && detail}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemorizeCard = React.memo(Card);
export default MemorizeCard;
