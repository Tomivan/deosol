import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/deosol-logo.jpg"
import "./nav.component.css";

const NavComponent = () => {
    return(
        <div>
            <Navbar expand="lg" className="nav">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/"><img src={Logo} className="deosol"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about" className="link">About</Nav.Link>
                        <Nav.Link href="/services" className="link">Services</Nav.Link>
                        <Nav.Link href="/packages" className="link">Packages</Nav.Link>
                        <Nav.Link href="/contact-us" className="link">Contact Us</Nav.Link>
                        <Nav.Link href="/gallery" className="link">Gallery</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavComponent;