import React from 'react';
import Logo from "./robinhood.svg"
import "./Header.css"
function Header() {
  return (
    <div className="header__wrapper">
        <div className="header__logo">
        <img src={Logo} width={25} alt="robinhood-img"/>
            {/* LOGO */}
        </div>
        <div className="header__search">
            <div className="header__searchContainer">
                <input placeholder="search" type="text"/>
            </div>
            {/* SEARCHBAR */}
        </div>

        {/* MENU ITEMS */}
        <div className="header__menuItems">
            <a href="#">Free Stocks</a>
            <a href="#">Portfolio</a>
            <a href="#">Cash</a>
            <a href="#">Message</a>
            <a href="#">Account</a>
        </div>

    </div>
  )
}

export default Header