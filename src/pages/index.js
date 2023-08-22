import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery";

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    )
}

export default Pages;