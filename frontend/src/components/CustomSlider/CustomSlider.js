import React, { useState } from "react";
import "./CustomSlider.css";
import {deleteHighlight } from "./../../Services/highlights"

const CustomSlider = ({ newsData }) => {
  const role = localStorage.getItem('role');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : newsData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < newsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const deleteNews = async(index) => {
    // Implement your delete logic here
    console.log("Deleting news at index:", index);
    await deleteHighlight(index);
  };

  return (
    <div className="custom-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(${-currentIndex * 25}%)` }}
      >
        {newsData.map((article, index) => (
          <div key={index} className="slide">
            {(role === 'Admin' || role === 'Operator') && (
                <button
                  className="news-delete-button"
                  onClick={() => deleteNews(article._id)}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/5073/5073620.png" width={20} alt="delete" />
                </button>
              )}
            <div className="img-container">
              <img
                src={article.image}
                alt="highlight"
                className="highlight-img"
              />
            </div>

            <div className="news-card-content">
              <h3>{article.title}</h3>
              <p>{article.description.slice(0, 317)}</p>
              <small>{article.date}</small>

              
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
