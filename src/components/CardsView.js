import React from "react";
import ShopCard from "./ShopCard";
import "../styles/cardsview.css";

function CardsView({ cards }) {
    return (
        <div className="container"> 
            { cards.map((element, index) => {
                return (
                    <ShopCard key={index} item={element}/>
                );
            })}
        </div>
    );
}

export default CardsView;