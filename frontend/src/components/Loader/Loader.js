// CentralizedLoader.js
import React, { useState, useEffect } from 'react';
import './Loader.css';
import LoaderIMG from '../../Assets/SDSS.png';
import { useNavigate } from 'react-router-dom';

const CentralizedLoader = () => {
  const [loading, setLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);

      const interval = setInterval(() => {
        // Use the functional form of setZoomLevel to ensure the latest state is used
        setZoomLevel((prevZoomLevel) => {
          const newZoomLevel = prevZoomLevel + 0.1;

          // Assuming the original size is 1, you can adjust this value based on your needs
          if (newZoomLevel >= 1) {
            clearInterval(interval);
            // After reaching the original size, navigate to /home
            navigate('/login');
          }

          return newZoomLevel;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={`centralized-loader ${loading ? 'loading' : ''}`}>
      <div className="loader-container" style={{ transform: `scale(${zoomLevel})` }}>
        <img src={LoaderIMG} alt="Loader" className="loader-image" />
      </div>
    </div>
  );
};

export default CentralizedLoader;
