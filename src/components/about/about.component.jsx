import React from "react";
import Video from "../../assets/videos/deosol-background.mp4";
import Planning from "../../assets/images/planning.jpg"
import "./about.component.css";

const AboutComponent = () => {
    return(
        <div className="about">
            <div className="nav-overlay"></div>
            <video src={Video} loop autoPlay muted className="video"/>
            <div className="card">
                <div className="text">
                    <h2>About Us</h2>
                    <p>We bring your ideas to life for your big day. <br />
                    Check out the services we offer below:</p>
                    <ol>
                        <li>Decorator</li>
                        <li>Event Planner</li>
                        <li>Hall Bookings</li>
                    </ol>
                </div>
                <img src={Planning} alt="" />
            </div>
        </div>
    )
}

export default AboutComponent;