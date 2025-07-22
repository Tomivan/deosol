import Carousel from 'react-bootstrap/Carousel';
import Logo from "../../assets/images/background.jpg"
import One from "../../assets/images/deosol1.jpg";
import Two from "../../assets/images/deosol2.jpg";
import Three from "../../assets/images/deosol3.jpg";
import Four from "../../assets/images/deosol4.jpg";
import Five from "../../assets/images/deosol5.jpeg";
import Six from "../../assets/images/deosol6.jpg";
import Seven from "../../assets/images/deosol7.jpg";
import Eight from "../../assets/images/deosol8.jpg";
import Nine from "../../assets/images/deosol9.jpg";
import Ten from "../../assets/images/deosol10.jpg";
import Eleven from "../../assets/images/deosol11.jpg";
import Twelve from "../../assets/images/deosol12.jpg";
import Thirteen from "../../assets/images/deosol13.jpg";
import Fourteen from "../../assets/images/deosol14.jpg";
import Fifteen from "../../assets/images/deosol15.jpg";
import Sixteen from "../../assets/images/deosol16.jpg";
import Seventeen from "../../assets/images/deosol17.jpg";
import Eighteen from "../../assets/images/deosol18.jpg";
import Nineteen from "../../assets/images/deosol19.jpg";
import Twenty from "../../assets/images/deosol20.jpg";
import TwentyOne from "../../assets/images/deosol21.jpg";
import TwentyTwo from "../../assets/images/deosol22.jpg";
import TwentyThree from "../../assets/images/deosol23.jpg";
import TwentyFour from "../../assets/images/deosol24.jpg";
import "./gallery.component.css";

const GalleryComponent = () => {
    return(
        <div className="gallery">
            <img src={Logo} className="background"/>
            <h2>Gallery</h2>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img src={One} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Two} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Three} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Four} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Five} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Six} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Seven} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Eight} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Nine} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Ten} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Eleven} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Twelve} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Thirteen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Fourteen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Fifteen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Sixteen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Seventeen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Eighteen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Nineteen} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Twenty} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TwentyOne} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TwentyTwo} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TwentyThree} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TwentyFour} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Three} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default GalleryComponent;