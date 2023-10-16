import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "demo" && password === "password") {
      setIsAuthenticated(true); 
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login Page</h2>
        <hr />
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <h3>
            <a href="sd">Forgot Password ?</a>
          </h3>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="button">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
