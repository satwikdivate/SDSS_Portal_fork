import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { logoutUser } from "../../Services/auth";
import { useDispatch } from "react-redux";
import { getUser } from "../../Services/auth";
import Loading from "../SmallLoader/Loader";
import SDSS from "./../../Assets/SDSS.png";
import { getPendingRequest } from '../../Services/operator';


const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setdata] = useState();
  const [requestcount, setrequestcount] = useState(0);
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");
  const dropdownRef = useRef();

  const handle = () => {
    navigate("/u0/updateprofile");
    setIsMenuOpen(false);
  };

  const headerHandle = () => {
    navigate("/landing");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const portal = (e) => {
    navigate("/home");
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser(navigate));
  };

  const newspost = (e) => {
    e.preventDefault();
    navigate("/postupdate");
  };

  const getData = async () => {
    try {
      const result1 = await dispatch(getUser());
      setdata(result1);
      const pending = await getPendingRequest();
        setrequestcount(pending.data.length);
        console.log(pending.data);

    } catch (e) {
      console.log("ERROR AT FRONTEND:", e);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    getData();document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  if (!data) {
    return <Loading />;
  }

  const requets = () => {
    navigate("/request");
  };

  const renderDropdownItems = ({children}) => {
    return (
      <div className="dropdown">
        <p>
          <i class="bx bx-user-circle"></i>
          <strong>{data.firstName + " " + data.lastName}</strong>
        </p>
        <p>
          <i class="bx bx-user"></i>Role: <strong>{data.role}</strong>
        </p>
        <p className="drop red+" onClick={portal}>
          <h5>
            <i class="bx bxs-notepad"></i>Portal
          </h5>
        </p>
        <p className="drop" onClick={handle}>
          <h5>
            <i class="bx bxs-user-detail"></i>Update Profile
          </h5>
        </p>
        {role === "Admin" && (
          <p className="drop" onClick={newspost}>
            <h5>
              <i class="bx bx-news"></i>Post New Update
            </h5>
          </p>
        )}

        <hr />
        <p className="drop red" onClick={logout}>
          <h5>
            <i class="bx bx-log-out"></i>Logout
          </h5>{" "}
        </p>
      </div>
    );
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="ngo-name">
        <div className="menu-toggle" onClick={toggleMenu}>
          <i
            className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
            id="menu-icon"
          ></i>
        </div>
        <img src={SDSS} alt="" id="main" />
        <p className="logo" onClick={headerHandle}>
          स्वामी <span>दयानंद</span> सरस्वती शाखा
        </p>
      </div>

      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <a href="/" onClick={headerHandle}>
          <i class="bx bxs-home"></i>मुख्य पान
        </a>
        <a href="#about" onClick={handle}>
          <i class="bx bx-history"></i>इतिहास
        </a>
        <a href="/contact" onClick={handle}>
          <i class="bx bxs-phone-call"></i>संपर्क
        </a>

        {role === "Admin" && (
          <a className="requests" onClick={requets}>
            <i class='bx bxs-bell-ring'><p>{requestcount}</p></i>
          </a>
        )}

        <div className="profile-container">
          <div className="profile-section" ref={dropdownRef}>
            {data.profilePicture == null ? (
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt="Profile"
                className="profile-picture"
              />
            ) : (
              <img
                src={data.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            )}

            <h4>
              <i class="bx bxs-chevron-down"></i>
            </h4>
          </div>
          {isDropdownOpen && window.innerWidth <= 768 && renderDropdownItems()}
        </div>
        {isDropdownOpen && window.innerWidth > 768 && renderDropdownItems()}
      </nav>
      <>
    </header>
  );
};

export default Header;
