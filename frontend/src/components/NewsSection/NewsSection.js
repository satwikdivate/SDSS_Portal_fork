// src/components/News.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./NewsSection.css";
import { getAllHighlight } from "../../Services/highlights";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);

  const getnewsData = async () => {
    const result = await getAllHighlight();
    setNewsData(result.data);
  }

  useEffect(() => {
    getnewsData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two news cards in one slide
    slidesToScroll: 1,
  };

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <Slider {...settings}>
        {newsData.map((article) => (
          <div key={article.id} className="news-card">
            <div className="news-card-content">
              <img src={article.image} alt='highlight' className='highlight-img'/>
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
    </div>
  );
};

export default NewsSection;
