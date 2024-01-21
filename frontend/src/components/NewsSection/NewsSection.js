// src/components/News.js
import React, { useEffect, useState } from "react";
import "./NewsSection.css";
import { getAllHighlight } from "../../Services/highlights";
import NewsCategory from "../../components/Category-News/Newscategory";

const NewsSection = () => {
  const [Maidan, setMaidan] = useState(null);
  const [Tasika, setTasika] = useState(null);
  const [Karykram, setKarykram] = useState(null);
  const [Sampark, setSampark] = useState(null);

  const getnewsData = async () => {
    try {
      const maidanData = await getAllHighlight("Maidan");
      console.log("Maidan Data:", maidanData);
      setMaidan(maidanData);

      const tasikaData = await getAllHighlight("Tasika");
      console.log("Tasika Data:", tasikaData);
      setTasika(tasikaData);

      const karykramData = await getAllHighlight("Karykram");
      console.log("Karykram Data:", karykramData);
      setKarykram(karykramData);

      const samparkData = await getAllHighlight("Sampark");
      console.log("Sampark Data:", samparkData);
      setSampark(samparkData);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching news data...");
    getnewsData();
  }, []);

  return (
    <div className="news-container">
      {Maidan && Maidan.data.length > 0 && (
        <div className="Maidan-News news">
          <div className="category-dropdown-line">
            <div className="news-dropdown">
              <h2>Maidan News</h2>
            </div>
            <NewsCategory category={Maidan} />
          </div>
        </div>
      )}
      {Tasika && Tasika.data.length > 0 && (
        <div className="Tasika-News news">
          <div className="category-dropdown-line">
            <div className="news-dropdown">
              <h2>Tasika News</h2>
            </div>
          </div>
          <NewsCategory category={Tasika} />
        </div>
      )}
      {Karykram && Karykram.data.length > 0 && (
        <div className="Karykram-News news">
          <div className="category-dropdown-line">
            <div className="news-dropdown">
              <h2>Karykram News</h2>
            </div>
          </div>
          <NewsCategory category={Karykram} />
        </div>
      )}
      {Sampark && Sampark.data.length > 0 && (
        <div className="Sampark-News news">
          <div className="category-dropdown-line">
            <div className="news-dropdown">
              <h2>Sampark News</h2>
            </div>
          </div>
          <NewsCategory category={Sampark} />
        </div>
      )}
    </div>
  );
};

export default NewsSection;
