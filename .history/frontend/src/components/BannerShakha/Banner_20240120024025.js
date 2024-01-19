// Banner.js
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Banner.css"; 

const Banner = () => {
  const images = [
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/1216a39a-5e4f-4154-a853-0b0139f2b6b6.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/895562e2-bf99-4c3a-9f4a-74b50fad3a25.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/4a99c240-ceb3-4511-ad41-fa3db339ce50.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/5f421881-197e-4b3d-8eb6-1e6bf7382120.png",
  ];

  return (
    <div className="banner-container">
       <AwesomeSlider
        bullets={false} // Disable bullets if not needed
        organicArrows={false} // Disable arrows if not needed
        fillParent={true} // Adjust the slider to fill the parent container
        play={true} // Enable autoplay
        cancelOnInteraction={false} // Continue autoplay on user interaction
        interval={5000} // Set the autoplay interval in milliseconds (e.g., 5000 ms = 5 seconds)
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
