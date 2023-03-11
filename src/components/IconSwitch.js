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
                <span onClick={handleClick}>Иконка от гугла</span>
           </div>
        </>
    );
}

export default IconSwitch;