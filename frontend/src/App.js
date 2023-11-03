import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/1.Login&Reegister/Login';
import FillProfile from './Pages/3.0.Profile/FillProfile';
import MonthlyReport from './Pages/2.4.MonthlyReport/MonthlyReport';
import PrivateRoute from './components/Private/PrivateRoute';
import Home from './Pages/2.0.Landing/Home';
import StudentBio from './Pages/2.1.StudentDetails/StudentDetails';
import Classcard from './components/ClassCard/classcard';
import ListStudent from './components/Student List/StudentList';
import Attendance from './Pages/2.3.Attendance/ViewAttendance/Atteendance.js';
import AttendPage from './Pages/2.3.Attendance/AttendPage';
import MarkAttendance from './Pages/2.3.Attendance/MarkAttendance/MarkAttendance';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route path="/student" element={<StudentBio />} />
        <Route path="/class/All" element={<Classcard />} />
        <Route path="/class/5" element={<ListStudent />} />
        <Route path="/updateprofile" element={<FillProfile />} />
        <Route path="/mreport" element={<MonthlyReport role="admin" />} />
        <Route path="/attend" element={<AttendPage role="user" />} />
        <Route path="/attend/view" element={<Attendance role="admin" />} />
        <Route path="/attend/mark" element={<MarkAttendance />}>
          <Route
            element={<MarkAttendance />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
