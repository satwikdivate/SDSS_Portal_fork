import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from "../../../Services/auth";
import logo from "./../../../Assets/Swa-roopwardhinee_logo.png";
import "./../Login.css"

const Login = () => {


  const toggleRegistrationForm = () => {
    navigate("/register");
  };
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");


  const fullText = "' स्व ' - रूपवर्धिनी";
  const quote = "विकसित व्हावे | अर्पित होऊनी जावे ||";

  const startTyping = (text, setText, content, callback) => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= content.length) {
        setText(content.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        if (callback) {
          callback();
        }
      }
    }, 100);
  };

  useEffect(() => {
    startTyping("text1", setText1, fullText, () => {
      setTimeout(() => {
        startTyping("text2", setText2, quote, () => {
          setTimeout(() => {
            setText1("");
            setText2("");
            startTyping("text1", setText1, fullText, () => {
              setTimeout(() => {
                startTyping("text2", setText2, quote);
              }, 200);
            });
          }, 200);
        });
      }, 200);
    });
  }, []);


  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();
    console.log(username);
    console.log(password)
    // alert(username);
    dispatch(login(username, password, navigate))
  };
  return (
    <div className="login">
      <div className="orange">
        <div className="name">
          <>
            <img src={logo} className="swa-logo" alt="'Swa' - Roopwardhinee" />
            <p className="org-name">{text1}</p>
            <p className="org-quote">{text2}</p>
          </>
        </div>
      </div>
      <div className="white">

        <div className={`overlay  'login-slide-in'`}>
          <div className="heading">
            <h1>Login</h1>
            <h1>स्वामी दयानंद सरस्वती शाखा </h1>
          </div>

          <div className="login-cred">

            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login-submit" onClick={handleLogin}>
              Submit
            </button>
            <button className="register-button" onClick={toggleRegistrationForm}>
              Don't Have Account ?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;