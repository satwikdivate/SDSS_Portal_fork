import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/NewsSection/NewsSection.css";

const NewsCategory = ({ category }) => {
  const [nonews, setNonews] = useState(false);

  useEffect(() => {
    if (category === null || !category.data) {
      setNonews(true)
    } else {
      setNonews(false);
    }
  }, [category]);

  const news = category.data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="category">
      {nonews ? (
        <p>No news available.</p>
      ) : (
        <Slider {...settings}>
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
        </Slider>
      )}
    </div>
  );
};

export default NewsCategory;