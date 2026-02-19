import { useNavigate } from "react-router-dom";
import Video from "../../assets/videos/deosol-background.mp4";
import "./home.component.css";

const HomeComponent = () => {
    const navigate = useNavigate()
    return(
        <div className="home">
            <div className="hero">
                <div className="overlay"></div>
                <video src={Video} loop autoPlay muted preload="auto"/>
                <div className="content">
                    <h1>Crafting Unforgettable Moments</h1>
                    <p>We specialize in creating bespoke events that reflect your unique style and vision. <br /> From intimate gatherings to grand celebrations, our team ensures every detail is perfect.</p>
                    <button className="purple" onClick={() => navigate('/contact-us') }>Book me!</button>
                </div>
            </div>
            <section className="mission">
                <p className="heading"><strong>Our Mission</strong></p>
                <p>At Deosol Events and Decor, our mission is to transform your dreams into reality. 
                    We believe that every event should be a reflection of your personality and values, 
                    leaving a lasting impression on you and your guests. We are committed to providing 
                    exceptional service, meticulous planning, and flawless execution, ensuring a seamless 
                    and stress-free experience from start to finish.</p>
                <p className="heading"><strong >Our Approach</strong></p>
                <p>We take a collaborative approach to event planning, working closely with our clients to 
                    understand their vision and preferences. From initial consultation to post-event follow-up, 
                    we are dedicated to providing personalized service and support. Our process includes 
                    detailed planning, creative design, vendor management, and on-site coordination, ensuring 
                    every aspect of your event is handled with care and precision.</p>
            </section>
        </div>
    )
}

export default HomeComponent;