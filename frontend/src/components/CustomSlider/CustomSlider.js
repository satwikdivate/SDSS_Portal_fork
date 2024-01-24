// CustomSlider.js
import React, { useState } from "react";
import "./CustomSlider.css";
import { deleteHighlight } from "./../../Services/highlights";
import NewsPopup from "../News-POPUP/NewsPopup"; // Import the NewsPopup component

const CustomSlider = ({ newsData }) => {
  const role = localStorage.getItem("role");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : newsData.length - 1
    );
    setShowFullContent(false); // Reset showFullContent when changing news
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < newsData.length - 1 ? prevIndex + 1 : 0
    );
    setShowFullContent(false); // Reset showFullContent when changing news
  };

  const deleteNews = async (index) => {
    // Implement your delete logic here
    console.log("Deleting news at index:", index);
    await deleteHighlight(index);
  };

  const editNews = async (index) => {
    // Implement your delete logic here
    console.log("Deleting news at index:", index);
    await deleteHighlight(index);
  };

  const toggleFullContent = (article) => {
    setSelectedArticle(article);
    setShowFullContent(!showFullContent);
  };

  const closePopup = () => {
    setShowFullContent(false);
  };

  return (
    <div className="custom-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(${-currentIndex * 25}%)` }}
      >
        {newsData.map((article, index) => (
          <div key={index} className="slide">
            {(role === "Admin" || role === "Operator") && (
              <div className="news-editorials">
                <button
                  className="news-delete-button"
                  onClick={() => deleteNews(article._id)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5073/5073620.png"
                    width={20}
                    alt="delete"
                  />
                </button>
                <button
                  className="news-edit-button"
                  onClick={() => editNews(article._id)}
                >
                  <i class="bx bxs-edit"></i>
                </button>
              </div>
            )}
            <div className="news-wrapper">
              <div className="img-container">
                <img
                  src={article.image}
                  alt="highlight"
                  className="highlight-img"
                />
              </div>

              <div className="news-card-content">
                <h3>{article.title}</h3>
                {showFullContent || (
                  <p className="news-description">
                    <strong>{article.description.split(":")[0]} :</strong>
                    <p>{article.description.split(":")[1].slice(0, 217)}</p>
                    <div
                      className="read-more-button"
                      onClick={() => toggleFullContent(article)}
                    >
                      {showFullContent ? "Read Less" : "Read More"}
                      <i class="bx bx-right-arrow-alt"></i>
                    </div>
                  </p>
                )}
                <small>{article.date}</small>
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

      {showFullContent && selectedArticle && (
        <NewsPopup article={selectedArticle} onClose={closePopup} />
      )}
    </div>
  );
};

export default CustomSlider;
