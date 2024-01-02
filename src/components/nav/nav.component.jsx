import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/deosol-logo.jpg"
import "./nav.component.css";

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/"><img src={Logo} className="deosol"/></Link>
            <div className="links">
                <Link to="/about" className="link">About</Link>
                <Link to="/services" className="link">Services</Link>
                <Link to="/packages" className="link">Packages</Link>
                <Link to="/contact-us" className="link">Contact Us</Link>
                <Link to="/gallery" className="link">Gallery</Link>
            </div>
        </div>
    )
}

export default Nav;