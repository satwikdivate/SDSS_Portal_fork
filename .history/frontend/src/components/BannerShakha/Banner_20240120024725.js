import React, { useState, useEffect } from "react";
import "./Banner.css"; // Add styling in this CSS file if needed

const Banner = () => {
  const images = [
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/1216a39a-5e4f-4154-a853-0b0139f2b6b6.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/895562e2-bf99-4c3a-9f4a-74b50fad3a25.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/4a99c240-ceb3-4511-ad41-fa3db339ce50.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/5f421881-197e-4b3d-8eb6-1e6bf7382120.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="banner-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </div>
      <button className="nav-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="nav-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Banner;
