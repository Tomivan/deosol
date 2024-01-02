import React from "react";
import Background from '../../assets/images/background.jpg'
import Media from "../../assets/images/contact.jpg";
import { Link } from "react-router-dom";
import "./contact.component.css";

const ContactComponent = () => {
    return(
        <div className="contact">
            <img src={Background} className="background"/>
            <h2>Contact Us</h2>
            <div className="card fade-bottom">
                <div className="text">
                    <div className="contacts">
                        <p><strong>Instagram: </strong> deosoleventsanddecor</p>
                        <p><strong>Whatsapp: </strong><Link to="https://api.whatsapp.com/send?phone=2349038549697" target="_blank" className="whatsapp">wa.link/gg4g0t</Link></p>
                        <p><strong>Email:</strong> deosolevents@gmail.com</p>
                    </div>
                    <Link to='https://docs.google.com/forms/d/1r4mcDsvgtUUFiUdIQq5kSLe54LiEjtS1aCRsQTWz-7M/edit' target="_blank"><button className="purple" >Book Deosol Events</button></Link>
                </div>
                <img src={Media} alt="" className="media" />
            </div>
        </div>
    )
}

export default ContactComponent;