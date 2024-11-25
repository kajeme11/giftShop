import React from 'react';
import "./Gallery.css";
import './General.css';
import img1 from "../../hair_images/27FFAF92-764C-4B6C-92D7-86EC202D7173.JPG"
import img2 from "../../hair_images/2951C582-6C1B-47E6-96D3-BA06CB14A41E.JPG"
import img3 from "../../hair_images/D8570A67-5E2E-4614-A61D-435CAE532AAB.JPG"
import img4 from "../../hair_images/IMG_0428.PNG"
import img5 from "../../hair_images/IMG_0429.PNG"
import img6 from "../../hair_images/IMG_0457.jpg"
import img7 from "../../hair_images/IMG_0489.jpg"
import img8 from "../../hair_images/IMG_0519.jpg"
import img9 from "../../hair_images/IMG_3162.jpg"
import img10 from "../../hair_images/IMG_3163.jpg"
import img11 from "../../hair_images/IMG_3164.jpg"
import img12 from "../../hair_images/IMG_3166.jpg"
import img13 from "../../hair_images/IMG_3168.jpg"
import img14 from "../../hair_images/IMG_3169.jpg"
import img15 from "../../hair_images/IMG_3173.jpg"
import img16 from "../../hair_images/IMG_3174.jpg"
import img17 from "../../hair_images/IMG_4366.jpg"
import img18 from "../../hair_images/IMG_4368.jpg"
import img19 from "../../hair_images/IMG_4800.jpg"
import img20 from "../../hair_images/IMG_4971.jpg"
import img21 from "../../hair_images/IMG_5978.jpg"
import img22 from "../../hair_images/IMG_8287.jpg"
import img23 from "../../hair_images/IMG_8289.jpg"
import img24 from "../../hair_images/IMG_8724.jpg"


export const Gallery = () => {
    const im = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, 
        img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24];
    
    return(
        <div className="mainContainer gallery-container">
            <div className="title content">
                <h1 className="title-name">Gallery</h1>
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