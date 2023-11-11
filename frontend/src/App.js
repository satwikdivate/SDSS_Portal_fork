import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/1.Login&Reegister/Login';
import Home from './Pages/2.0.Landing/Home';
import FillProfile from './Pages/3.0.Profile/FillProfile';
import MonthlyReport from './Pages/2.4.MonthlyReport/MonthlyReport';
import PrivateRoute from './components/Private/PrivateRoute'; // Create a PrivateRoute component for authenticated routes
import StudentBio from './Pages/2.1.StudentDetails/StudentDetails';
import Classcard from './components/ClassCard/classcard';
import ListStudent from './components/Student List/StudentList';
import Attendance from './Pages/2.3.Attendance/ViewAttendance/Atteendance.js';
import AttendPage from './Pages/2.3.Attendance/AttendPage';
// import MarkAttendance from './Pages/2.3.Attendance/MarkAttendance/MarkAttendance';
import Event from './Pages/2.7.BigEvent/Event.js';
import Team from './Pages/2.9.ManagementTeam/Team.js';
import CentralizedLoader from './components/Loader/Loader.js';
import OpenRoute from './components/OpenRoute/OpenRoute.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<CentralizedLoader />} />
        <Route path="/login" element={
        <OpenRoute>
        <Login/>
          </OpenRoute>
        } />
    
      
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<StudentBio />} />
            <Route path="/class/All" element={<Classcard />} />
            <Route path="/class/5" element={<ListStudent />} />
            <Route path="/u0/updateprofile" element={<FillProfile />} />
            <Route path="/mreport" element={<MonthlyReport role="admin" />} />
            <Route path="/attend" element={<AttendPage role="user" />} />
            <Route path="/attend/view" element={<Attendance role="admin" />} />
            <Route path="/attend/mark" element={<PrivateRoute isAuthenticated={isAuthenticated} role="admin" />} />  still woriking
            <Route path="/events" element={<Event role="admin" />} />
            <Route path="/auth/team" element={<Team />} />
       
       
          <Route path="/" element={<Login/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
