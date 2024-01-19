import React, { useState, useEffect } from "react";
import Cus
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



  // Render null if no news or display news slider
  return (
    <div className="category">
      {nonews ? (
        <p>No news available.</p>
      ) : (
        <CustomSlider />
      )}
    </div>
  );
};

export default NewsCategory;
