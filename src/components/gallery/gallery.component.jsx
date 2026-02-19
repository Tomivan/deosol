import Carousel from 'react-bootstrap/Carousel';
import Logo from "../../assets/images/background.jpg"
import Four from "../../assets/images/deosol4.jpg";
import Five from "../../assets/images/deosol5.jpeg";
import Six from "../../assets/images/deosol6.jpg";
import Seven from "../../assets/images/deosol7.jpg";
import Eight from "../../assets/images/deosol8.jpg";
import Nine from "../../assets/images/deosol9.jpg";
import Thirteen from "../../assets/images/deosol13.jpg";
import Fourteen from "../../assets/images/deosol14.jpg";
import Sixteen from "../../assets/images/deosol16.jpg";
import Seventeen from "../../assets/images/deosol17.jpg";
import Eighteen from "../../assets/images/deosol18.jpg";
import Nineteen from "../../assets/images/deosol19.jpg";
import Twenty from "../../assets/images/deosol20.jpg";
import TwentyThree from "../../assets/images/deosol23.jpg";
import TwentyFour from "../../assets/images/deosol24.jpg";
import "./gallery.component.css";

const GalleryComponent = () => {
    return(
        <div className="gallery">
            <img src={Logo} className="background" alt="a background of purple with gallery on it" height="350" width="100%"/>
            <h2>Gallery</h2>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img src={Four} alt="lily flowers on white table cloth with glass cups and decorative glasses"  width="1200" height="600"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Five} alt="flowers on top and around a white table, glass decorations on the table"  width="1200" height="600"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Six} alt="chairs with a golden background and other decorations" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Seven} alt="light bulbs hanging low from the top" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Eight} alt="hall with tables and chairs with white drapes and flowers" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Nine} alt="White couch with white background decorated with flowers in blue light"  width="1200" height="600"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Thirteen} alt="Candles hanging from the top" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Fourteen} alt="A hall with tables and chairs in white, with candles and decorative flowers hanging from the top" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Sixteen} alt="Plates on white tables with glass decorations and white chairs" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Seventeen} alt="A purple backdrop and purple carpet, with blown up displays of the couple decorated with flower" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Eighteen} alt="Couple dance with dry ice" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Nineteen} alt="Purple backdrop with blown up images of the couple" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Twenty} alt="Hall setup" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TwentyThree} alt="Wedding IV on a table" width="1200" height="600" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={TwentyFour} alt="Plates on a table with white cover" width="1200" height="600" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default GalleryComponent;