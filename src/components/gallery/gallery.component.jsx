import React from "react";
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
import "./gallery.component.css";

const GalleryComponent = () => {
    return(
        <div className="gallery">
            <img src={Logo} className="background"/>
            <h2>Gallery</h2>
            <div className="pictures">
                <div className="row">
                    <img src={One} alt="" />
                    <img src={Two} alt="" />
                    <img src={Three} alt="" />
                </div>
                <div className="row">
                    <img src={Four} alt="" />
                    <img src={Five} alt="" />
                    <img src={Six} alt="" />
                </div>
                <div className="row">
                    <img src={Seven}alt="" />
                    <img src={Eight}alt="" />
                    <img src={Nine} alt="" />
                </div>
                <div className="row">
                    <img src={Ten} alt="" />
                    <img src={Eleven} alt="" />
                    <img src={Twelve} alt="" />
                </div>
                <div className="row">
                    <img src={Thirteen}alt="" />
                    <img src={Fourteen} alt="" />
                    <img src={Fifteen} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent;