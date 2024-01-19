import React, { useState, useEffect } from "react";
import "./CustomSlider.css";

const CustomSlider = ({ newsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : newsData.length - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < newsData.length - 2 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="custom-slider">
      <div className="slider-container" style={{ transform: `translateX(${-currentIndex * 50}%)` }}>
        {newsData.map((article, index) => (
          <div key={index} className="slide">
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
