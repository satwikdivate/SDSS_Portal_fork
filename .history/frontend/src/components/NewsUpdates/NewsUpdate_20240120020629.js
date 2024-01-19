import React, { useState } from "react";
import "./NewsUpdates.css"; // Import the CSS file
import Header from "../Header/Header";
import { createHighlight } from "../../Services/highlights";
import Loading from "../SmallLoader/Loader";

const NewsUpdatesPost = () => {
  const [headline, setHeadline] = useState("");
  const [picture, setPicture] = useState(null);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");

  const dropdownOptions = ["Maidan", "Tasika", "Karyakram", "Sampark"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("News Posted:", {
      headline,
      picture,
      date,
      location,
      content,
      selectedDropdownValue,
    });
    const newcontent = location + ", " + date + " : " + content;
    console.log(newcontent);

    const res = await createHighlight(
      headline,
      newcontent,
      picture,
      selectedDropdownValue
    );
    console.log(res);

    setHeadline("");
    setPicture(null);
    setDate("");
    setLocation("");
    setContent("");
    setSelectedDropdownValue("");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPicture(selectedFile);
  };

  return (
    <>
      <div className="news-container">
        <h2 className="news-heading">Post News</h2>
        <div className="news-details">
          <form className="news-form">
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

            {/* Dropdown */}

            <button
              className="news-button"
              type="submit"
              onClick={handleSubmit}
            >
              Post News
            </button>
          </form>

          <div className="news-preview">
            <label className="news-label" htmlFor="dropdown">
              Choose Category:
            </label>
            <div className="news-dropdown-container">
              <select
                className="news-input news-input[type='select']"
                id="dropdown"
                value={selectedDropdownValue}
                onChange={(e) => setSelectedDropdownValue(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select category
                </option>
                {dropdownOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
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
