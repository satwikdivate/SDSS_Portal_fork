import React, { useState, useEffect } from 'react';
import './Banner.css';

const banners = [
  {
    title: 'Discover Your Inner Radiance with Swa-Roopwardhinee',
    subtitle: 'Empowering Your Journey to Self-Discovery and Fulfillment',
    buttonText: 'Explore Now',
    backgroundColor: '#7CB9E8',
  },
  {
    title: 'Awaken Your Potential with Swa-Roopwardhinee',
    subtitle: 'Embark on a Journey of Self-Transformation and Empowerment',
    buttonText: 'Discover More',
    backgroundColor: '#6CB4EE',
  },
  {
    title: 'Empower Your Essence with Swa-Roopwardhinee',
    subtitle: 'Unlock the Infinite Possibilities Within You',
    buttonText: 'Begin Your Journey',
    backgroundColor: '#318CE7',
  },
  {
    title: 'Harmony of Mind, Body, and Spirit',
    subtitle: 'Experience the Balance with Swa-Roopwardhinee',
    buttonText: 'Discover Harmony',
    backgroundColor: '#4B9CD3',
  },
];

const Slider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner < banners.length - 1 ? prevBanner + 1 : 0));
  };

  const prevBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner > 0 ? prevBanner - 1 : banners.length - 1));
  };

  const renderCurrentBanner = () => {
    const { title, subtitle, buttonText, backgroundColor } = banners[currentBanner];
    return (
      <div className="banner" style={{ backgroundColor }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href='https://www.swaroopwardhinee.org/'><button onClick={exploreNow}>{buttonText}</button></a>
      </div>
    );
  };

  const exploreNow = () => {
        alert("Redirecting to explore page!");
    
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextBanner();
    }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="banner-slider-container">
      <div className="slider-content" style={{ transform: `translateX(${-currentBanner * 100}%)` }}>
        {banners.map((_, index) => (
          <div key={index} className="banner-container">
            {renderCurrentBanner()}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevBanner}>&#8249;</button>
      <button className="next-button" onClick={nextBanner}>&#8250;</button>
    </div>
  );
};

export default Slider;
