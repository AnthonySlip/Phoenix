/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";




function Burger() {

    const [burger, setBurger] = useState ('burger__item');
    const [menu, setMenu] = useState ('header__menu');
    const [isOpen, setIsOpen] = useState (false);


    const isActive = () => {
        if (!isOpen) {
            setBurger ('burger__item active');
            setMenu ('header__menu active');
            document.body.style.overflow = 'hidden';
        }else{
            setBurger ('burger__item');
            setMenu ('header__menu');
            document.body.style.overflow = 'auto';
        }
        setIsOpen (!isOpen);
    }


    return (
        <div className="burger">
            <div className="burger__body" onClick={isActive}>
                <div className={burger}></div>
                <div className={burger}></div>
                <div className={burger}></div>
                <div className={burger}></div>
            </div>
            <nav className={menu}>
                <ul className="header__menu-list">
                    <li className="header__menu-item"><Link to="/Main" className="header__menu-link" onClick={isActive}>Main</Link></li>
                    <li className="header__menu-item"><Link to="/Product" className="header__menu-link" onClick={isActive}>Product</Link></li>
                    <li className="header__menu-item"><Link to="/About" className="header__menu-link" onClick={isActive}>About us</Link></li>
                    <li className="header__menu-item"><Link to="/Contact" className="header__menu-link" onClick={isActive}>Contact</Link></li>
                    <li className="header__menu-item"><Link to="/Certificates" className="header__menu-link" onClick={isActive}>Certificates</Link></li>
                </ul>
            </nav>
        </div>
    );
}





export default Burger;