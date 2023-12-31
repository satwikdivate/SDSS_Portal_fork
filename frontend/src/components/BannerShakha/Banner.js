// Banner.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"; // Create this CSS file for styling if needed

const Banner = () => {
  const images = [
    "https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg",
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
            <div className="text-container">
              <h5 className="photo-detail">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem
                ipsum may be used as a placeholder before final copy is
                available. 
                प्रकाशन आणि ग्राफिक डिझाइनमध्ये, Lorem ipsum
                हा एक प्लेसहोल्डर मजकूर आहे जो सामान्यतः अर्थपूर्ण सामग्रीवर
                अवलंबून न राहता दस्तऐवजाचे दृश्य स्वरूप किंवा टाइपफेस प्रदर्शित
                करण्यासाठी वापरला जातो. अंतिम प्रत उपलब्ध होण्यापूर्वी Lorem
                ipsum प्लेसहोल्डर म्हणून वापरली जाऊ शकते.
              </h5>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
