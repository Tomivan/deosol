import React from "react";
import { Link } from "react-router-dom";
import "./nav.component.css";

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/"><h1 className="deosol">DEOSOL</h1></Link>
            <div className="links">
                <Link to="/about" className="link">About</Link>
                <Link to="/contact-us" className="link">Contact Us</Link>
                <Link to="/gallery" className="link">Gallery</Link>
            </div>
        </div>
    )
}

export default Nav;