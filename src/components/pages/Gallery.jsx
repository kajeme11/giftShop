import React from 'react';
import "./Gallery.css";
import './General.css';
import img1 from "../../gifts_images/perfume1.png"
import img2 from "../../gifts_images/perfume2.png"
import img3 from "../../gifts_images/perfume3.png"
import img4 from "../../gifts_images/perfume4.png"
import img5 from "../../gifts_images/perfume5.png"
import img6 from "../../gifts_images/gift1.png"
import img7 from "../../gifts_images/gift2.png"
import img8 from "../../gifts_images/gift1.png"


export const Gallery = () => {
    const im = [img1, img2, img3, img4, img5, img6, img7, img8, img2];
    
    return(
        <div className="mainContainer gallery-container">
            <div className="title content">
                <h1 className="title-name">Products</h1>
                <div className="photo-gallery">
                    <div>
                        <div className="gallery">  
                        {im.map((item, index) =>{
                            return <img className="picture" key={item} src={item} alt="hair" />
                        })
                        }   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};