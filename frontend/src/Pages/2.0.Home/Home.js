import React from 'react';
import './Body.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import sdss from "../../Assets/SDSS.png";

const HomePage = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  
  const cardImages = {
    'Vardhak Deatils': "https://cdn1.iconfinder.com/data/icons/digital-marketing-53/48/17-Search-256.png",
    'Grades': 'https://cdn4.iconfinder.com/data/icons/education-325/48/27-Learning-256.png',
    'Attendance': 'https://cdn1.iconfinder.com/data/icons/browser-and-interface-7/48/13-Browser-Interface-time-256.png',
    'Reports' : 'https://cdn1.iconfinder.com/data/icons/bank-and-finance-15/48/21-Report-256.png',
    'Event': "https://cdn0.iconfinder.com/data/icons/business-startup-10/50/64-512.png",
    'Management Team': "https://cdn3.iconfinder.com/data/icons/business-strategy-7/48/4-Business_Strategy-256.png",
    'Shakha TimeTable': "https://cdn2.iconfinder.com/data/icons/mentoring-and-training-13/64/working_time_work_timetable_efficiency_schedule_time-256.png",
    'Exam Result': "https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-03-512.png",
    'Suggestions': "https://cdn4.iconfinder.com/data/icons/coronavirus-color/64/doctor-advise-warning-suggestion-avatar-256.png",
    'Weekly Analysis': 'https://cdn2.iconfinder.com/data/icons/free-simple-line-mix/48/24-Data_Analysis-256.png',
  };
  const requets = () => {
    navigate("/request");
  };

  return (
    <>
      <Header />
      <div className="home-page">
        <main>
          <div className="search-module">
            <input type="search" placeholder="Search" />
            {role === "Admin" && (
          <button className="login-btn" onClick={requets}>
            All Requests
          </button>
        )}
          </div>

          <div className="modules">
            
      <img src={sdss} alt='logo' className='background-png'/>``
            <ul className="card-container">
              {Object.keys(cardImages).map(cardTitle => (
                <Link
                  key={cardTitle}
                  to={cardTitle === 'Vardhak Deatils' ? '/student' 
                  : cardTitle === 'Grades' ? '/class/All' 
                  : cardTitle === 'Attendance' ? '/attend' 
                  : cardTitle === 'Reports' ? '/reports' 
                  : cardTitle === 'Management Team' ? '/auth/team' 
                  : cardTitle === 'Event' ? '/events' 
                  : cardTitle === 'Exam Result' ? '/exam'
                  : cardTitle === 'Weekly Analysis' ? '/shakha-analysis'
                  : '/home'}
                >
                  <li className="card">
                    <p style={{ marginTop: "15px" }}>{cardTitle}</p>
                    <div className="card-image">
                      <img src={cardImages[cardTitle]} alt={cardTitle} />
                    </div>
                    
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
