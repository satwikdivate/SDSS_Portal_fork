// src/components/News.js
import React, { useEffect, useState } from 'react';
import "./NewsSection.css"
import {getAllHighlight} from "../../Services/highlights";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);

  const getnewsData = async() =>{
    const result = await getAllHighlight();
    console.log(result);
    setNewsData(result);
  }

  useEffect(() => {
    getnewsData();
  }, []);

  
  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <ul className="news-list">
        {newsData.map((article) => (
          <li key={article.id} className="news-card">
            <div className="news-card-content">
              <h3>{article.title}</h3>
              <p>{article.shortContent}</p>
              <small>{article.date}</small>
            </div>
            <div className="news-details">
              <p>{article.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
