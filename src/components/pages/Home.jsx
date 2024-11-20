import React from 'react';
import './General.css';
import './Home.css';
import FadeInCarousel from './feature_components/FadeInCarousel'
import img1 from "../../images/IMG_4369.jpg"
import img2 from "../../images/IMG_3168.jpg"
import img3 from "../../images/IMG_3169.jpg"
import img4 from "../../images/IMG_4372.jpg"

export const Home = () => {
    const images = [img1, img2, img3, img4];
    
    return (
        <div className="mainContainer home-container">
            <div className="content">
                <div className="left-container container">
                    <h4>Home</h4>
                </div>
                <div className="right-container container">
                    <FadeInCarousel images={images} interval={3000}/>
                </div>

            </div>
        </div>
    );
}