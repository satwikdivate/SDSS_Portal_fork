import './App.css';
import React, { useState } from "react";
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentBio from './Pages/StudentDetails/StudentDetails.js';
import Home from './Pages/Landing/Home';
import Classcard from './components/ClassCard/classcard';
import ListStudent from './Pages/ListGrade/ListStudent';
import PrivateRoute from "./components/Private/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login isAuthenticated/>} />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/student' element={<StudentBio />} />
        <Route path='/class/All' element={<Classcard />} />
        <Route path='/class/5' element={<ListStudent />} />
      </Routes>
    </Router>
  )
}

export default App;
