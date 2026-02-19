import Logo from "../../assets/images/background.jpg"
import Onose from "../../assets/images/onose.jpg"
import "./about.component.css";

const AboutComponent = () => {
    return(
        <div className="about">
            <img src={Logo} className="background" alt="a background of purple with about us on it" height="350" width="100%"/>
            <h2>About Us</h2>
            <div className="section">
                <img src={Onose} alt="" />
                <div className="text">
                    <p>Welcome to Deosol Events and Decor where dreams come to life!</p>
                    <p> At Deosol Events, we're more than just event planners and decorators; we're memory creators. 
                    With a passion for crafting unforgettable experiences, our dedicated team brings your visions to reality.
                    With years of experience in the industry, we understand that every event is unique. Whether it's a wedding, 
                    corporate gathering, or a special celebration, we thrive on turning your ideas into stunning, seamless realities.</p>
                   
                   <p> Our commitment to creativity, attention to detail, and unwavering dedication to your satisfaction make us your trusted 
                    partner in making your event one to remember. From the smallest decorative accents to grand event designs, we take care of it all.
                    Let's embark on this exciting journey together. Explore our portfolio, get inspired, and let us be the architects of your cherished memories.
                    Discover the magic that happens when imagination meets execution – only at Deosol Events.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;