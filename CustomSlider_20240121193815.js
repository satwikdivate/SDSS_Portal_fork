import React, { useState, useRef, useEffect } from "react";
import "./CustomSlider.css";
import { deleteHighlight } from "./../../Services/highlights";

const CustomSlider = ({ newsData }) => {
  const role = localStorage.getItem("role");
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);



  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : newsData.length - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < newsData.length - 2 ? prevIndex + 1 : 0));
  };

  const deleteNews = async (id) => {
    // Implement your delete logic here
    console.log("Deleting news with id:", id);
    await deleteHighlight(id);
  };

  return (
    <div className="custom-slider">
      <div
        className="slider-container"
        style={{
          transform: `translateX(${-currentIndex * (100 / newsData.length)}%)`,
        }}
      >
        {newsData.map((article, index) => (
          <div
            key={index}
            className="slide"
            ref={slideRef}
            style={{ width: `calc(100% / ${newsData.length})` }}
          >
            {(role === "Admin" || role === "Operator") && (
              <button
                className="news-delete-button"
                onClick={() => deleteNews(article._id)}
              >
                X
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
