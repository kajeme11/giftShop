import React from 'react';
import './General.css';
import './Home.css';
import FadeInCarousel from './feature_components/FadeInCarousel'
import img1 from "../../images/boutique.png"
import img2 from "../../images/products.png"
import img3 from "../../images/perfume1.png"
import img4 from "../../images/perfume2.png"

export const Home = () => {
    const images = [img1, img2, img3, img4];
    
    return (
        <div className="mainContainer home-container">
            <div className="content h-content">
                <div className="top-container h-container">
                    <h4>Welcome!</h4>
                </div>
                <div className="bottom-container h-container">
                    <FadeInCarousel images={images} interval={3000}/>
                </div>

            </div>
        </div>
    );
}