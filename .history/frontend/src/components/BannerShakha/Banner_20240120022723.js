// Banner.js
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"; // Create this CSS file for styling if needed

const Banner = () => {

  const images = [
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/1216a39a-5e4f-4154-a853-0b0139f2b6b6.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/895562e2-bf99-4c3a-9f4a-74b50fad3a25.png",
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/4a99c240-ceb3-4511-ad41-fa3db339ce50.png",
    "https://t4.ftcdn.net/jpg/02/71/29/75/360_F_271297554_0DAlzyFb8jzYg0lfmUOzyhtMer0orz4h.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-container">
      <Slider {...settings} className="slider">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
