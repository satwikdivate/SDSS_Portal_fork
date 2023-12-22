import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Login
import Register from "./Pages/1.Login&Reegister/Registration/Register.js";
import Login from "./Pages/1.Login&Reegister/Login/Login.js";
import OpenRoute from "./components/OpenRoute/OpenRoute.js"; // Check : Authenticate Useer


import Home from './Pages/2.0.Home/Home'; // Homee Page :  All Features 
import StudentBio from './Pages/2.1.StudentDetails/StudentDetails';// Student : Details Indivituals
import Classcard from './Pages/2.2.ListGrade/classcard.js'; // Classes : 5th to 16th
import ClassInfoPage from './components/classInfo/ClassInfoPage.js'; // Classes : Indivitual Information 
import AttendPage from './Pages/2.3.Attendance/AttendPage'; // Attendance : View / Mark
import Attendance from './Pages/2.3.Attendance/ViewAttendance/Atteendance.js'; // Atteendance : View Indivitual Attendance 
import GradeAttendance from './Pages/2.3.Attendance/MarkAttendance/GradeforAttendance/GradeAttendance.js'; // Attendance : Classes
import AttendiesList from './Pages/2.3.Attendance/MarkAttendance/AttendiesList.js'; // Attendance : StudentList
import MonthlyReport from './Pages/2.4.Reports/MonthlyReport/MonthlyReport'; // Report Monthly
import Event from './Pages/2.6.BigEvent/Event.js'; // Events : Upcomming Events
import Team from './Pages/2.8.ManagementTeam/Team.js'; // Team : Our Official Managemeent Team

// Profile
import FillProfile from './Pages/3.0.Profile/FillProfile'; // Profile : Update Personal, Family, Educational Details 

// Requests
import RequestApproval from "./Pages/4.0.admin-request/RequestApproval.js"; // Role : Change Role -> Student to Operator
import Reports from './Pages/2.4.Reports/Reports.js';
import ClassReport from './components/ClassReport/ClassReport.js';



function App() {

  // const role=localStorage.getItem("role")?localStorage.getItem("role"):null

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<CentralizedLoader />} /> */}
        <Route path="/login" element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />

        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<StudentBio />} />
        <Route path="/class/All" element={<Classcard />} />
        <Route path='/class/:classsName' element={<ClassInfoPage />} />
        <Route path="/u0/updateprofile" element={<FillProfile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/daily-report" element={<MonthlyReport />} />
        <Route path="/reports/monthly-report" element={<MonthlyReport />} />
        <Route path="/reports/last-year report" element={<MonthlyReport />} />
        <Route path="/attend" element={<AttendPage />} />
        <Route path="/attend/view" element={<Attendance />} />
        <Route path="/attend/mark" element={<GradeAttendance />} />
        <Route path="/attend/mark/:classsName" element={<AttendiesList />} />
        <Route path="/events" element={<Event />} />
        <Route path="/auth/team" element={<Team />} />
        <Route path='/request' element={<RequestApproval />} />
        <Route path='/class-report' element={<ClassReport />} />
        <Route path="/" element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;
