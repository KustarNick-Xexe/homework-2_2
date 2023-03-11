import React from "react";
import ShopItem from "./ShopItem";

function ListView({ items }) {
    return (
        <> 
            { items.map((element, index) => {
                return (
                    <ShopItem key={index} item={element}/>
                );
            })}
        </>
    );
}

export default ListView;