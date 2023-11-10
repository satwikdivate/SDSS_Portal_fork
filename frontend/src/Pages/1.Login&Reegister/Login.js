import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuthenticated}) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [displaylogin, setofflogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [standard, setStandard] = useState("");
  const [email, setEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [requestAdminRole, setRequestAdminRole] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validUsername = "example";
  const validPassword = "password";

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

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      setError("Invalid username or password");
    }
  };

  const handleRegistration = () => {
    const formData = {
      fullName,
      standard,
      email,
      username: newUsername,
      password: newPassword,
      requestAdminRole,
    };

    console.log(formData);
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
            <h1>स्वामी दयानंद सरस्वती शाखा </h1>
          </div>
          {displaylogin && (
            <div className="login-cred">
              <h1>Login</h1>
              {error && <p className="error-message">{error}</p>}
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
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <label>Standard</label>
                <input
                  type="number"
                  placeholder="Standard"
                  value={standard}
                  onChange={(e) => setStandard(e.target.value)}
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <label>
                  Request for Admin Role
                  <input
                    type="checkbox"
                    checked={requestAdminRole}
                    onChange={(e) => setRequestAdminRole(e.target.checked)}
                  />
                </label>
                <button className="register-submit" onClick={handleRegistration}>
                  Register
                </button>
                <button className="register-button" onClick={toggleRegistrationForm}>
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
