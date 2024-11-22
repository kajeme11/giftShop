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
                    <h4>Welcome!</h4>
                    <p className="context">I’m Anita, Welcome to my website. Let me share a little about myself. 
                        I am from San Francisco. I have been in the cosmetology industry since I was 17 years old.
                        I have 18 years of experience in the industry, 10 of those years as a hairstylist.
                        I specialize in color. Specifically highlights and Babylights/Balayage.
                        I have trained in many different color lines and salons in San Francisco. 
                        Working with brands like Wella, Goldwell, and Redken has allowed me to enhance my expertise.
                        I always strive to provide my clients with exceptional customer service,
                        meeting all their hair care needs while ensuring their hair remains healthy.
                        I would be delighted to assist you - feel free to message me to book your next appointment! 
                        </p>
                        <p className="context ending">Thanks for being here.</p>
                </div>
                <div className="right-container container">
                    <FadeInCarousel images={images} interval={3000}/>
                </div>

            </div>
        </div>
    );
}