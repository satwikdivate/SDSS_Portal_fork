import React, { useState, useEffect } from "react";
import "./CustomSlider.css";

const CustomSlider = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : newsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < newsData.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="custom-slider">
      <div className="slider-container" style={{ transform: `translateX(${-currentIndex * 25}%)` }}>
        {/* Set a key based on the index to help React identify each slide */}
        {newsData.map((article, index) => (
          <div key={index} className="slide">
            <div className="img-container">

            <img src={article.image} alt="highlight" className="highlight-img" />
            
            <div className="news-card-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <small>{article.date}</small>
              <div className="news-details">
                <p>{article.content}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate the slides to create a seamless loop */}
        {newsData.map((article, index) => (
          <div key={index + newsData.length} className="slide">
            <div className="img-container">
            <img src={article.image} alt="highlight" className="highlight-img" />
            </div>
            <div className="news-card-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <small>{article.date}</small>
              <div className="news-details">
                <p>{article.content}</p>
              </div>
            </div>
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

export default CustomSlider;
