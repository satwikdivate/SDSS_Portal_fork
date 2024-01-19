// src/components/News.js
import React, { useEffect, useState } from "react";
import "./NewsSection.css";
import { getAllHighlight } from "../../Services/highlights";
import NewsCategory from "../../components/Category-News/Newscategory";

const NewsSection = () => {
  const [Maidan, setMaidan] = useState([]);
  const [Tasika, setTasika] = useState([]);
  const [Karykram, setKarykram] = useState([]);
  const [Sampark, setSampark] = useState([]);

  const getnewsData = async () => {
    const Maidan = await getAllHighlight("Maidan");
    setMaidan(Maidan);
    console.log(Maidan)
    const Tasika = await getAllHighlight("Tasika");
    setTasika(Tasika);
    const Karykram = await getAllHighlight("Karykram");
    setKarykram(Karykram);
    const Sampark = await getAllHighlight("Sampark");
    setSampark(Sampark);
  };

  useEffect(() => {
    getnewsData();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <div className="Maidan-News news">
        <div className="category-dropdown-line">
          <div className="news-dropdown">
            <h2>Maidan News</h2>{" "}
          </div>
        </div>
        <NewsCategory category={Maidan} />
      </div>
      <div className="Tasika-News news">
        <div className="category-dropdown-line">
          <div className="news-dropdown">
            <h2>Tasika News</h2>{" "}
          </div>
        </div>
        <NewsCategory category={Tasika} />
      </div>
      <div className="Karykram-News news">
        <div className="category-dropdown-line">
          <div className="news-dropdown">
            <h2>Karykram News</h2>{" "}
          </div>
        </div>
        <NewsCategory category={Karykram} />
      </div>
      <div className="Sampark-News news">
        <div className="category-dropdown-line">
          <div className="news-dropdown">
            <h2>Sampark News</h2>{" "}
          </div>
        </div>
        <NewsCategory category={Sampark} />
      </div>
    </div>
  );
};

export default NewsSection;
