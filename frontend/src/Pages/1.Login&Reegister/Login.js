import React, { useState, useEffect } from "react";
import "./Login.css";
import { login, signUp } from "../../Services/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [displaylogin, setofflogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch=useId.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const nagivate = useNavigate();

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    registrationUsername: "",
    registrationPassword: "",
    isAdmin: false,
  });

  const handleRegister = () => {

    // dispatch(signUp(registerData.fullName,registerData.fullName,registerData.email,registerData.email,registerData.))
    console.log(registerData);
  };
  
  const fullText = "'स्व' - रूपवर्धिनी";
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

  const toggleRegistrationForm = () => {
    setShowRegistration(!showRegistration);
    setofflogin(!displaylogin);
  };

  const handleLogin = (e) => {

    e.preventDefault();
    console.log(username);
    console.log(password)
    // alert(username);
    dispatch(login(username, password, navigate))
    if (username === "example" && password === "password") {
      setIsAuthenticated(true);
      // nagivate("/home")
    }
  };

  return (
    <div className="login">
      <div className="orange">
        <div className="name">
          <>
            <p>{text1}</p>
            <p>{text2}</p>
          </>
        </div>
      </div>
      <div className="white">
        <div className={`overlay  ${showRegistration ? 'login-slide-out' : 'login-slide-in'}`}>
          <div className="heading">
            <h1>Login</h1>
            <h1>स्वामी दयानंद सरस्वती शाखा </h1>
          </div>
          {displaylogin && (
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
            </div>
          )}
          <div className="register">
            {showRegistration ? (
              <div>
                <h2>Create an Account</h2>
                <p>Join us and become a part of our community.</p>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={registerData.fullName}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, fullName: e.target.value })
                  }
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  required
                />
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={registerData.registrationUsername}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      registrationUsername: e.target.value,
                    })
                  }
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={registerData.registrationPassword}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      registrationPassword: e.target.value,
                    })
                  }
                  required
                />
                <label>
                  Request for Admin Role
                  <input
                    type="checkbox"
                    name="role"
                    checked={registerData.isAdmin}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        isAdmin: e.target.checked,
                      })
                    }
                  />
                </label>
                <button className="register-submit" onClick={handleRegister}>
                  Register
                </button>
                <button
                  className="register-button"
                  onClick={toggleRegistrationForm}
                >
                  Already Have Account
                </button>
              </div>
            ) : (
              <button className="register-button" onClick={toggleRegistrationForm}>
                Don't Have Account ?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
