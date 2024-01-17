/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";  
import { Link } from "react-router-dom";







function Nav (props) {
    return (
        <nav className={props.style.menu}>
            <ul className={props.style.menuList}>
                <li className={props.style.menuItem}><Link to="/Main" className={props.style.menuLink}>Main</Link></li>
                <li className={props.style.menuItem}><Link to="/Product" className={props.style.menuLink}>Product</Link></li>
                <li className={props.style.menuItem}><Link to="/About" className={props.style.menuLink}>About us</Link></li>
                <li className={props.style.menuItem}><Link to="/Contact" className={props.style.menuLink}>Contact</Link></li>
                <li className={props.style.menuItem}><Link to="/Certificates" className={props.style.menuLink}>Certificates</Link></li>
            </ul>
        </nav>
    );
}






export default Nav;