import React from 'react';
import './Body.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const img = 'https://static.vecteezy.com/system/resources/previews/005/919/486/original/book-read-library-study-solid-icon-illustration-logo-template-suitable-for-many-purposes-vector.jpg';
  const cardImages = {
    'Vardhak Deatils': "https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-07-256.png",
    'Grades': 'https://i.pinimg.com/736x/91/30/da/9130da19ff4982a9f4931b3b14e4d09a.jpg',
    'Attendance': 'https://icon-library.com/images/attendance-icon/attendance-icon-15.jpg',
    'Monthly Report': "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Report-256.png",
    'Last Year Report': "https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-6/64/__analytics_report_sales-256.png",
    'Exam Result': "https://cdn2.iconfinder.com/data/icons/xomo-basics/128/document-03-512.png",
    'Event': "https://cdn0.iconfinder.com/data/icons/business-startup-10/50/64-512.png",
    'Last Year Redport': img,
    'Shakha TimeTable': "https://cdn2.iconfinder.com/data/icons/mentoring-and-training-13/64/working_time_work_timetable_efficiency_schedule_time-256.png",
    'Suggestions': "https://cdn4.iconfinder.com/data/icons/coronavirus-color/64/doctor-advise-warning-suggestion-avatar-256.png",
  };

  return (
    <>
      <Header />
      <div className="home-page">
        <main>
          <div className="search-module">
            <input type="search" placeholder="Search" />
          </div>

          <div className="modules">
            <ul className="card-container">
              {Object.keys(cardImages).map(cardTitle => (
                <Link
                  key={cardTitle}
                  to={cardTitle === 'Vardhak Deatils' ? '/student' : cardTitle === 'Grades' ? '/class/All' : '/'}
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
    </>
  );
};

export default HomePage;
