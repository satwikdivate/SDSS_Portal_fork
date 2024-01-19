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

  // Group news into pairs
  const pairedNews = [];
  for (let i = 0; i < news.length; i += 2) {
    pairedNews.push(news.slice(i, i + 2));
  }

  // Render null if no news or display news slider
  return (
    <div className="category">
      {nonews ? (
        <p>No news available.</p>
      ) : (
        <AwesomeSlider>
          {pairedNews.map((newsPair, index) => (
            <div key={index} className="news-card">
              {newsPair.map((article) => (
                <div key={article.id} className="news-card-content">
                  <img
                    src={article.image}
                    alt="highlight"
                    className="highlight-img"
                  />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <small>{article.date}</small>
                  <div className="news-details">
                    <p>{article.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </AwesomeSlider>
      )}
    </div>
  );
};

export default NewsCategory;
