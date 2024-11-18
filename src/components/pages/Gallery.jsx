import React from 'react';
import "./Gallery.css";
import './General.css';
import img1 from "../../images/IMG_4369.jpg"



export const Gallery = () => {
    return(
        <div className="mainContainer gallery-container">
            <div className="title content">
                <h1 className="title-name">Gallery</h1>
                <div className="photo-gallery">
                    <div>
                        <div className="gallery">   
                            <img className="picture" src={img1} alt="hair" />      
                            <img className="picture"  src={img1} alt="hair" />
                            <img className="picture" src={img1} alt="hair" />
                            <img className="picture"  src={img1} alt="hair" />
                            <img className="picture" src={img1} alt="hair" />
                            <img className="picture"  src={img1} alt="hair" />
                            <img className="picture" src={img1} alt="hair" />
                            <img className="picture"  src={img1} alt="hair" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};