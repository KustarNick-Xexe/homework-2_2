import React from "react";
import "../styles/shopitem.css";

function ShopItem({ item }) {

    return (
    <>
        <div className="item">
          <div className="item__product-header">{item.name}</div>
          <div className="item__product-color">{item.color}</div>
          <div className="item__product-image">
            <img src={item.img} />
          </div>
          <div className="item__product-price">{item.price}</div>
          <button className="item__product-button">ADD TO CART</button>
        </div>
    </>
  );
}

export default ShopItem;