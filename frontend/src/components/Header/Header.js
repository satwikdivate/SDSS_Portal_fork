import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { logoutUser } from '../../Services/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth)
  const handle = () => {
    navigate("/u0/updateprofile");
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const headerHandle = () => {
    navigate("/home");
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout=(e)=>{
    e.preventDefault();
    dispatch(logoutUser(navigate));
  }

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
        <button className='login-btn' onClick={handle}>{user.firstName}</button>

        <button className='login-btn' onClick={logout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
