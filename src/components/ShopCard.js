import React from "react";
import "../styles/shopcard.css";

function ShopCard({ item }) {

    return (
    <>
        <div className="card">
          <div className="card__product-header">{item.name}</div>
          <div className="card__product-color">{item.color}</div>
          <div className="card__product-image">
            <img src={item.img} />
          </div>
          <div className="container">
            <div className="card__product-price">{item.price}</div>
            <button className="card__product-button">ADD TO CARD</button>
          </div>
        </div>
    </>
  );
}

export default ShopCard;