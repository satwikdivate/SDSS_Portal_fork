// src/components/News.js
import React, { useEffect, useState } from "react";
import "./NewsSection.css";
import { getAllHighlight } from "../../Services/highlights";
import NewsCategory from "../Category-News/Newscategory";

const NewsSection = () => {
  const [Maidan, setMaidan] = useState([]);
  const [Tasika, setTasika] = useState([]);
  const [Karykram, setKarykram] = useState([]);
  const [Sampark, setSampark] = useState([]);

  const [isOpenMaidan, setIsOpenMaidan] = useState(false);
  const [isOpenTasika, setIsOpenTasika] = useState(false);
  const [isOpenKarykram, setIsOpenKarykram] = useState(false);
  const [isOpenSampark, setIsOpenSampark] = useState(false);

  const getnewsData = async () => {
    const Maidan = await getAllHighlight("Maidan");
    setMaidan(Maidan);
    const Tasika = await getAllHighlight("Tasika");
    setTasika(Tasika);
    const Karykram = await getAllHighlight("Karykram");
    setKarykram(Karykram);
    const Sampark = await getAllHighlight("Sampark");
    setSampark(Sampark);
  };

  const toggleDropdownMaidan = () => {
    setIsOpenTasika(false);
    setIsOpenKarykram(false);
    setIsOpenSampark(false);
    setIsOpenMaidan(!isOpenMaidan);
  };
  const toggleDropdownTasika = () => {
    setIsOpenTasika(!isOpenTasika);
    setIsOpenMaidan(false);
    setIsOpenKarykram(false);
    setIsOpenSampark(false);
  };

  const toggleDropdownKaryakram = () => {
    setIsOpenKarykram(!isOpenKarykram);
    setIsOpenTasika(false);
    setIsOpenMaidan(false);
    setIsOpenSampark(false);
  };
  const toggleDropdownSampark = () => {
    setIsOpenSampark(!isOpenSampark);
    setIsOpenTasika(false);
    setIsOpenKarykram(false);
    setIsOpenMaidan(false);
  };

  useEffect(() => {
    getnewsData();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <div className="Maidan-News news">
        <div className="category-dropdown-line">
          <button className="news-dropdown" onClick={toggleDropdownMaidan}>
            <h2>Maidan News</h2>{" "}
            
          </button>
        </div>
        <NewsCategory category={Maidan} isOpen={isOpenMaidan} />
      </div>
      <div className="Tasika-News news">
        <div className="category-dropdown-line">
          <button className="news-dropdown" onClick={toggleDropdownTasika}>
            <h2>Tasika News</h2>{" "}
          </button>
        </div>
        <NewsCategory category={Tasika} isOpen={isOpenTasika} />
      </div>
      <div className="Karykram-News news">
        <div className="category-dropdown-line">
          <button className="news-dropdown" onClick={toggleDropdownKaryakram}>
            <h2>Karykram News</h2>{" "}
            {isOpenKarykram ? (
              <i class="bx bx-minus"></i>
            ) : (
              <i class="bx bx-plus"></i>
            )}
          </button>
        </div>
        <NewsCategory category={Karykram} isOpen={isOpenKarykram} />
      </div>
      <div className="Sampark-News news">
        <div className="category-dropdown-line">
          <button className="news-dropdown" onClick={toggleDropdownSampark}>
            <h2>Sampark News</h2>{" "}
            {isOpenSampark ? (
              <i class="bx bx-minus"></i>
            ) : (
              <i class="bx bx-plus"></i>
            )}
          </button>
        </div>
        <NewsCategory category={Sampark} isOpen={isOpenSampark} />
      </div>
    </div>
  );
};

export default NewsSection;
