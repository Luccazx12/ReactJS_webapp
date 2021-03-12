import React from 'react';
import './style.css';
import img from "./img/logosenai.jpg";

function Header() {
    return (
        <header>
            <div id="divlogosenai">
                <img id="logosenai" src={img} alt="" />
            </div>
            <div id="divtituloheader">
                <h1 id="tituloheader">SUÍÇO-BRASILEIRA PAULO ERNESTO TOLLE</h1>
            </div>
        </header>
    );
}

export default Header;