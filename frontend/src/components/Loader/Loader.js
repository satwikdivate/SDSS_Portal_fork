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

        setZoomLevel((prevZoomLevel) => {
          const newZoomLevel = prevZoomLevel + 0.1;

          if (newZoomLevel >= 5.2) {
            clearInterval(interval);
            navigate('/login');
          }

          return newZoomLevel;
        });
      }, 90);

      return () => clearInterval(interval);
    }, 90);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={`centralized-loader ${loading ? 'loading' : ''}`}>
      <div className="loader-container" style={{ transform: `scale(${zoomLevel})` }}>
        <img src={LoaderIMG} alt="Loader" className="loader-image" />
        <h1>स्वामी दयानंद सरस्वती शाखा</h1>
      </div>
    </div>
  );
};

export default CentralizedLoader;
