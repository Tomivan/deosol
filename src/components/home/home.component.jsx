import React from "react";
import { useNavigate } from "react-router-dom";
import Video from "../../assets/videos/deosol-background.mp4";
import "./home.component.css";

const HomeComponent = () => {
    const navigate = useNavigate()
    return(
        <div className="home">
            <div className="overlay"></div>
            <video src={Video} loop autoPlay muted/>
            <div className="content">
                <h1>Crafting Unforgettable Moments</h1>
                <p>We specialize in creating bespoke events that reflect your unique style and vision. <br /> From intimate gatherings to grand celebrations, our team ensures every detail is perfect.</p>
                <button className="purple" onClick={() => navigate('/contact-us') }>Book me!</button>
            </div>
        </div>
    )
}

export default HomeComponent;