import React from "react";
import ShopCard from "./ShopCard";

function CardsView({ cards }) {
    return (
        <> 
            { cards.map((element, index) => {
                return (
                    <ShopCard key={index} item={element}/>
                );
            })}
        </>
    );
}

export default CardsView;