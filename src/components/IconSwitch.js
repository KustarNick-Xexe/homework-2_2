import React from "react";
import "../styles/iconswitch.css"

function IconSwitch({ icon, onSwitch }) {

    const handleClick = () => {
        console.log('Вызвано');
        onSwitch();
    }

    return (
        <> 
           <div className="products-header">
                <span className="material-icons" onClick={handleClick}>{icon}</span>
           </div>
        </>
    );
}

export default IconSwitch;