// Banner.js
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"; // Create this CSS file for styling if needed

const Banner = () => {

  const images = [
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/1216a39a-5e4f-4154-a853-0b0139f2b6b6.png",
    "https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg",
    "https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012469_1280.jpg",
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
