import React, { useState } from "react";
import "./NewsUpdates.css"; // Import the CSS file
import Header from "../Header/Header";

const NewsUpdatesPost = () => {
  const [headline, setHeadline] = useState("");
  const [picture, setPicture] = useState(null);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your post request or data handling here
    console.log("News Posted:", { headline, picture, date, location, content });
    
    // Reset form fields after submission
    setHeadline("");
    setPicture(null);
    setDate("");
    setLocation("");
    setContent("");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPicture(selectedFile);
  };

  return (
    <>
      <Header />
      <div className="news-container">
        <h2 className="news-heading">Post News</h2>
        <div className="news-details">
          <form className="news-form" onSubmit={handleSubmit}>
            <label className="news-label" htmlFor="headline">
              Headline:
            </label>
            <input
              className="news-input"
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
            />

            <div className="row">
              <div className="col">
                <label className="news-label" htmlFor="date">
                  Date:
                </label>
                <input
                  className="news-input"
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="col">
                <label className="news-label" htmlFor="location">
                  Location:
                </label>
                <input
                  className="news-input"
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <label className="news-label" htmlFor="content">
              Content:
            </label>
            <textarea
              className="news-textarea"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>

            <button className="news-button" type="submit">
              Post News
            </button>
          </form>

          <div className="news-preview">
            <label className="news-label" htmlFor="picture">
              Choose Picture:
            </label>
            <input
              className="news-input"
              type="file"
              id="picture"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <p>Uploaded Photo:</p>
            {picture ? (
              <img src={URL.createObjectURL(picture)} alt="Uploaded" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCdZsk0e8QIiSfv7r2H6C2CVYbtrabRosOw&usqp=CAU"
                alt="Placeholder"
              />
            )}
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsUpdatesPost;
