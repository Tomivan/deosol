import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery";
import Services from "./services";
import Packages from "./packages";

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packages" element={<Packages />} />
            </Routes>
        </Router>
    )
}

export default Pages;