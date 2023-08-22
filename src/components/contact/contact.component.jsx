import React from "react";
import Video from "../../assets/videos/deosol-background.mp4";
import Media from "../../assets/images/contact.jpg";
import { Link } from "react-router-dom";
import "./contact.component.css";

const ContactComponent = () => {
    return(
        <div className="contact">
            <div className="nav-overlay"></div>
            <video src={Video} loop autoPlay muted className="video"/>
            <div className="card">
                <div className="text">
                    <h2>Contact Us</h2>
                    <div className="contacts">
                        <p><strong>Instagram: </strong> deosoleventsanddecor</p>
                        <p><strong>Whatsapp: </strong><Link to="https://api.whatsapp.com/send?phone=2349038549697" target="_blank" className="whatsapp">wa.link/gg4g0t</Link></p>
                        <p><strong>Email:</strong> deosoldecor.events@gmail.com</p>
                    </div>
                </div>
                <img src={Media} alt="" />
            </div>
        </div>
    )
}

export default ContactComponent;