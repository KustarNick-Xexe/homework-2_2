import React from "react";
import ShopItem from "./ShopItem";
import "../styles/listview.css"

function ListView({ items }) {
    return (
        <div className="list-container"> 
            { items.map((element, index) => {
                return (
                    <ShopItem key={index} item={element}/>
                );
            })}
        </div>
    );
}

export default ListView;