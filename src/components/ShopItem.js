import React from "react";

function ShopItem({ item }) {

    return (
    <>
        <div className="card">
          <div className="card__product-header">{item.name}</div>
          <div className="card__product-color">{item.color}</div>
          <div className="card__product-image">
            <img src={item.img} />
          </div>
          <div className="card__product-price">{item.price}</div>
          <button className="card__product-button">ADD TO CART</button>
        </div>
    </>
  );
}

export default ShopItem;