import './App.css';
import React, { useState } from "react";
import Login from './Pages/1.Login&Reegister/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FillProfile from './Pages/3.0.Profile/FillProfile';
import MonthlyReport from './Pages/2.4.MonthlyReport/MonthlyReport';
import PrivateRoute from './components/Private/PrivateRoute';
import Home from './Pages/2.0.Landing/Home';
import StudentBio from './Pages/2.1.StudentDetails/StudentDetails';
import Classcard from './components/ClassCard/classcard';
import ListStudent from './components/Student List/StudentList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login setIsAuthenticated={setIsAuthenticated} />} />
         <Route
          path="/home"
          element={
            // <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            // </PrivateRoute>
          }
        /> 
        <Route path='/student' element={<StudentBio />} />
        <Route path='/class/All' element={<Classcard />} />
        <Route path='/class/5' element={<ListStudent />} /> 
        <Route path="/u0/updateprofile" element={<FillProfile />} />
        <Route path="/mreport" element={<MonthlyReport role = {"admin"} />} />
        <Route path="/mreportl" element={<MonthlyReport role = {"user"} />} />

      </Routes>


    </Router>
  )
}

export default App;
