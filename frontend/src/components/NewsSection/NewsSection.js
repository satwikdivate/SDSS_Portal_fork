// src/components/News.js
import React from 'react';
import "./NewsSection.css"


const NewsSection = () => {

  const newsData = [
    {
      id: 1,
      title: 'Lorem Ipsum News 1',
      shortContent: 'Short description of the news article 1.',
      content: 'Longer content of the news article 1.',
      date: '2023-01-01',
    },
    {
      id: 2,
      title: 'Lorem Ipsum News 2',
      shortContent: 'Short description of the news article 2.',
      content: 'Longer content of the news article 2.',
      date: '2023-02-15',
    },
    {
      id: 3,
      title: 'Lorem Ipsum News 3',
      shortContent: 'Short description of the news article 3.',
      content: 'Longer content of the news article 3.',
      date: '2023-03-30',
    },  
  ];
  
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
