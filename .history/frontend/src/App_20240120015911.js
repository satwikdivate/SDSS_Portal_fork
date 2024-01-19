import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Import other components and pages
import Register from "./Pages/1.0.Login&Reegister/Registration/Register.js";
import Login from "./Pages/1.0.Login&Reegister/Login/Login.js";
import Landing from './Pages/1.1.LandingPage/Landing.js';
import Home from './Pages/2.0.Home/Home';
import StudentBio from './Pages/2.1.StudentDetails/StudentDetails';
import Classcard from './Pages/2.2.ListGrade/classcard.js';
import ClassInfoPage from './components/ClassInfo/ClassInfoPage.js';
import AttendPage from './Pages/2.3.Attendance/AttendPage';
import Attendance from './Pages/2.3.Attendance/ViewAttendance/Atteendance.js';
import GradeAttendance from './Pages/2.3.Attendance/MarkAttendance/GradeforAttendance/GradeAttendance.js';
import AttendiesList from './Pages/2.3.Attendance/MarkAttendance/AttendiesList.js';
import MonthlyReport from './Pages/2.4.Reports/MonthlyReport/MonthlyReport';
import Event from './Pages/2.6.BigEvent/Event.js';
import Team from './Pages/2.8.ManagementTeam/Team.js';
import WeeklyReport from './Pages/2.9.ShakhaWeeklyAnalysis/MonthlyAnalysisChart.js';
import FillProfile from './Pages/3.0.Profile/FillProfile';
import RequestApproval from "./Pages/4.0.admin-request/RequestApproval.js";
import Reports from './Pages/2.4.Reports/Reports.js';
import ClassReport from './components/ClassReport/ClassReport.js';
import ClassAnalysis from './components/ClassAnalysis/ClassAnalysis.js';
import DailyReport from './Pages/2.4.Reports/DailyReport/DailyReport.js';
import NewsUpdatesPost from './components/NewsUpdates/NewsUpdate.js';
import OpenRoute from './components/OpenRoute/OpenRoute.js';
import Contactform from './Pages/5.0Contact/Contactform.js';
import Header from './components/Header/Header.js';

function App() {
  const navigate = useNavigate();

  const shouldDisplayHeader = () => {
    const currentPath = window.location.pathname;
    return !['/login', '/register'].includes(currentPath);
  };

  return (
    <Router>
      {shouldDisplayHeader() && <Header />}
      <Routes>

        {/* All User Routes */}
        <Route path="/" element={  <Login/> } />
        <Route path="/login" element={  <Login/> } />
        <Route path="/register" element={<Register />} />
        <Route path="/u0/updateprofile" element={<FillProfile />} />
        <Route path='/landing' element={<Landing />} />
        <Route path="/home" element={ 
          <Home/>
       } />
        <Route path="/class/All" element={<Classcard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/daily-report" element={<DailyReport />} />
        <Route path="/reports/monthly-report" element={<MonthlyReport />} />
        <Route path="/reports/last-year report" element={<MonthlyReport />} />
        <Route path="/attend" element={<AttendPage />} />
        <Route path="/events" element={<Event />} />
        <Route path="/auth/team" element={<Team />} />


        {/* Only User : Personal Routes */}
        <Route path="/student" element={<StudentBio />} />
        <Route path="/attend/view" element={<Attendance />} />


        {/* Only Admin Routes */}
        <Route path='/class/:classsName' element={<ClassInfoPage />} />
        <Route path="/class-analysis/:classsName" element={<ClassAnalysis />} />
        <Route path="/shakha-analysis" element={<WeeklyReport />} />
        <Route path="/attend/mark" element={<GradeAttendance />} />
        <Route path="/attend/mark/:classsName" element={<AttendiesList />} />
        <Route path='/request' element={<RequestApproval />} />
        <Route path='/class-report' element={<ClassReport />} />
        <Route path='/postupdate' element={<NewsUpdatesPost />} />

       {/* contact route */}
       <Route path='/contact' element={<Contactform/>}/>
      </Routes>
    </Router>
  );
}

export default App;
