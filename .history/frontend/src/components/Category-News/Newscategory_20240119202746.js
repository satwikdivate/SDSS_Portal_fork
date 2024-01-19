import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../components/NewsSection/NewsSection.css";

const NewsCategory = ({ category }) => {
  const [nonews, setNonews] = useState(false);

  useEffect(() => {
    // Check if category is null or does not have data
    if (category === null || !category.data) {
      setNonews(true);
    } else {
      setNonews(false);
    }
  }, [category]);

  const news = category ? category.data : [];

  // Render null if no news or display news slider
  return (
    <div className="category">
      {nonews ? (
        <p>No news available.</p>
      ) : (
        <AwesomeSlider>
          {news.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-card-content">
                <img
                  src={article.image}
                  alt="highlight"
                  className="highlight-img"
                />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <small>{article.date}</small>
              </div>
              <div className="news-details">
                <p>{article.content}</p>
              </div>
            </div>
          ))}
        </AwesomeSlider>
      )}
    </div>
  );
};

export default NewsCategory;
