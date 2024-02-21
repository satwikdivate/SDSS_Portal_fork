// CustomSlider.js
import React, { useState } from "react";
import "./CustomSlider.css";
import { deleteHighlight } from "./../../Services/highlights";
import NewsPopup from "../News-POPUP/NewsPopup"; 
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const CustomSlider = ({ newsData }) => {
  const role = localStorage.getItem("role");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [confirmationAction, setConfirmationAction] = useState(null);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : newsData.length - 1
    );
    setShowFullContent(false); // Reset showFullContent when changing news
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < newsData.length - 1 ? prevIndex + 1 : 0
    );
    setShowFullContent(false); // Reset showFullContent when changing news
  };

  
  const confirmDelete = (articleId) => {
    setConfirmationAction({
      type: "delete",
      articleId,
    });
  };

  const confirmEdit = (articleId) => {
    setConfirmationAction({
      type: "edit",
      articleId,
    });
  };

  const handleDelete = async (articleId) => {
    console.log("Deleting news with ID:", articleId);
    await deleteHighlight(articleId);
    setConfirmationAction(null);
  };

  const handleEdit = async (articleId) => {
    // Implement your edit logic here
    console.log("Editing news with ID:", articleId);
    setConfirmationAction(null);
  };


  const toggleFullContent = (article) => {
    setSelectedArticle(article);
    setShowFullContent(!showFullContent);
  };

  const closePopup = () => {
    setShowFullContent(false);
  };

  return (
    <div className="custom-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(${-currentIndex * 25}%)` }}
      >
        {newsData.map((article, index) => (
          <div key={index} className="slide">
            {(role === "Admin" || role === "Operator") && (
              <div className="news-editorials">
                <button
                  className="news-delete-button"
                  onClick={() => confirmDelete(article._id)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5073/5073620.png"
                    width={20}
                    alt="delete"
                  />
                </button>
                <button
                  className="news-edit-button"
                  onClick={() => confirmEdit(article._id)}
                >
                  <i className="bx bxs-edit"></i>
                </button>
              </div>
            )}
            <div className="news-wrapper">
              <div className="img-container">
                <img
                  src={article.image}
                  alt="highlight"
                  className="highlight-img"
                />
              </div>

              <div className="news-card-content">
                <h3>{article.title}</h3>
                {showFullContent || (
                  <p className="news-description">
                    <strong>{article.description.split(":")[0]} :</strong> <br></br>
                    {article.description.split(":").slice(1)}
                    <div
                      className="read-more-button"
                      onClick={() => toggleFullContent(article)}
                    >
                      {showFullContent ? "Read Less" : "Read More"}
                      <i class="bx bx-right-arrow-alt"></i>
                    </div>
                  </p>
                )}
                <small>{article.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="nav-button next" onClick={handleNext}>
        &gt;
      </button>

      {showFullContent && selectedArticle && (
        <NewsPopup article={selectedArticle} onClose={closePopup} />
      )}
      {confirmationAction && (
        <ConfirmationModal
          action={confirmationAction.type}
          onConfirm={() =>
            confirmationAction.type === "delete"
              ? handleDelete(confirmationAction.articleId)
              : handleEdit(confirmationAction.articleId)
          }
          onCancel={() => setConfirmationAction(null)}
        />
      )}
    </div>
  );
};

export default CustomSlider;
