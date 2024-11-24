import React from 'react';
import "../pages/General.css";
import "../pages/Meet.css";

export const Meet = () => {

    return(
        <div className="mainContainer meet-container">

            <div className="left-container m-container">

            </div>
            <div className="right-container m-container">
            <p><span className="context">I’m Anita, Welcome to my website. 
            Let me share a little about myself.
            I am from San Francisco. I have been in the cosmetology 
            industry since I was 17 years old.
            18 years of experience in the industry, 10 of those years as a hairstylist.
            </span></p>
            <p className="context">I specialize in color. Specifically highlights and Babylights/Balayage.
            Trained in many different color lines and salons in San Francisco. 
             Working with brands like Wella, Goldwell, and Redken has allowed me to enhance my expertise.
            I always strive to provide my clients with exceptional customer service,
            I would be delighted to assist you - feel free to message me to book your next appointment! 
            </p>
            <p className="context ending">Thanks for being here.</p>
            </div>
        
        </div>
    )

}