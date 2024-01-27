// NewsPopup.js
import React from "react";
import "./NewsPopup.css"; // Create a corresponding CSS file for styling

const NewsPopup = ({ article, onClose }) => {
  return (
    <div className="news-popup">
      <div className="popup-content">
        <button className="news-close-button" onClick={onClose}>
          X
        </button>
        <h3>{article.title}</h3>
        <img
          src={article.image}
          alt="highlight"
          className="popup-img"
        />
        <p><strong>{article.description.split(':')[0]} :</strong></p>
        <p>{article.description.split(':').slice(1)}</p>
      </div>
    </div>
  );
};

export default NewsPopup;
