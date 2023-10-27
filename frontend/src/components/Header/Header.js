import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handle = () => {
    navigate("/login");
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const headerHandle = () => {
    navigate("/");
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon"></i>
      </div>
      <img src="favicon-32x32.png" alt="" id="main" />
      <p className="logo" onClick={headerHandle}>स्वामी <span>दयानंद</span> सरस्वती शाखा</p>
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="#home" className="active" onClick={headerHandle}>मुख्य पान</a>
        <a href="#about" onClick={handle}>इतिहास</a>
        <a href="#services" onClick={handle}>प्रमुख व्यवस्था</a>
        <a href="#portfolio" onClick={handle}>विशेष कार्यक्रम</a>
        <a href="#contact" onClick={handle}>संपर्क</a>
        <a href='5'><button className='login-btn' onClick={handle}>O</button></a>
      </nav>
    </header>
  );
};

export default Header;
