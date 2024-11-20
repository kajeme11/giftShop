import React, {useState, useEffect} from 'react'
import './FadeInCarousel.css';

const FadeCarousel = ({images, timeInterval = 3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, timeInterval);

        return () => clearInterval(timer);

    }, [images, timeInterval]);

    return (
        <div className="carousel carousel-container">
            {images.map((image, index) => (
                <img key={index} src={image} alt="Hair by Anita"
                className={
                    `fade-image ${index == currentIndex ? 'visible' : 'hidden'}`}/>
                ))}
        </div>
    )
}

export default FadeCarousel;