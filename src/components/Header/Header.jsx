import '../../App.scss';
import './header.scss';
import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img width="80px"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
            </div>
            <div className="links">
                <a href="" className="header-nav-a">Niv Navick</a>
            </div>
        </div>
    );
}

export default Header;
