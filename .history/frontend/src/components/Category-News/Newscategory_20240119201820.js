import React, { useState, useEffect } from "react";
import Carousel from "react-slick-carousel";
import "react-slick-carousel/lib/slick-carousel.css";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  // Render null if no news or display news carousel
  return (
    <div className="category">
      {nonews ? (
        <p>No news available.</p>
      ) : (
        <Carousel {...settings}>
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
        </Carousel>
      )}
    </div>
  );
};

export default NewsCategory;
