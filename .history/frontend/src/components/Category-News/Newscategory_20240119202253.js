import React, { useState, useEffect } from "react";
import { useS, animated } from "react-spring";
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

  // Animation props
  const props = useSpring({
    opacity: nonews ? 1 : 0,
    transform: nonews ? "translateY(0%)" : "translateY(-100%)",
  });

  // Render null if no news or display news with animation
  return (
    <div className="category">
      <animated.div style={props}>
        {nonews ? (
          <p>No news available.</p>
        ) : (
          <div className="slider">
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
          </div>
        )}
      </animated.div>
    </div>
  );
};

export default NewsCategory;
