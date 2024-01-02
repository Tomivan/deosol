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
                <h1>Deosol Events and Decor</h1>
                <p>Hi, I'm Onose and I will deliver breathtaking decorations for your events.</p>
                <button className="purple" onClick={() => navigate('/contact-us') }>Book me!</button>
            </div>
        </div>
    )
}

export default HomeComponent;