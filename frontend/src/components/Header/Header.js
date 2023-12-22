import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { logoutUser } from '../../Services/auth';
import { useDispatch} from "react-redux"
import { getUser } from '../../Services/auth';
import Loading from '../SmallLoader/Loader';
import SDSS from "./../../Assets/SDSS.png"

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser(navigate));
  }



  const [data, setdata] = useState();
  const dispatch = useDispatch();


  const getData = async () => {

    try {
      const token = localStorage.getItem("token");

      const result1 = await dispatch(getUser());


      // data set to useState
      setdata(result1);
      // setUserData(result1)


    } catch (e) {
      console.log("ERROR AT FRONTED:", e)
    }
  }

  useEffect(() => {
    getData();
  }, [data])
  if (!data || data.length === 0) {
    return <Loading />;
  }


  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>

      <div className='ngo-name'>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon"></i>
        </div>
        <img src={SDSS} alt="" id="main" />
        <p className="logo" onClick={headerHandle}>स्वामी <span>दयानंद</span> सरस्वती शाखा</p>
      </div>
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <a className="active" onClick={headerHandle}>मुख्य पान</a>
        <a href="#about" onClick={handle}>इतिहास</a>
        <a href="#contact" onClick={handle}>संपर्क</a>
        <button className='login-btn' onClick={handle}>{data?.firstName}</button>
        <button className='login-btn' onClick={logout}>Logout</button>
      </nav>
    </header>
  );
};

export default Header;
