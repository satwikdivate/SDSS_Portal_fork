// CentralizedLoader.js
import React, { useState, useEffect } from 'react';
import './Loader.css';
import LoaderIMG from '../../Assets/SDSS.png';
import { useNavigate } from 'react-router-dom';

const CentralizedLoader = () => {
  const [loading, setLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(0);
  const [initialPause, setInitialPause] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialPause(true); // Set initialPause to true after the initial pause
      setLoading(false);

      const interval = setInterval(() => {
        setZoomLevel((prevZoomLevel) => {
          const newZoomLevel = prevZoomLevel + 0.1;
          if (newZoomLevel >= 0.7) {
            clearInterval(interval);
            navigate('/login');
          }
          return newZoomLevel;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, 100);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (  
    <div className={`centralized-loader ${loading ? 'loading' : ''}`}>
      <div className={`loader-container ${initialPause ? 'blurred' : ''}`} style={{ transform: `scale(${zoomLevel})` }}>
        <img src={LoaderIMG} alt="Loader" className="loader-image" />
        <h1>स्वामी दयानंद सरस्वती शाखा</h1>
      </div>
    </div>
  );
};

export default CentralizedLoader;
