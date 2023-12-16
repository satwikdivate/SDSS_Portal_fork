import React from 'react';
import './../2.0.Home/Body.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const AttendPage = () => {

  const isAdmin = localStorage.getItem('role');


  const cardImages = {
    'View Attendance': "https://cdn1.iconfinder.com/data/icons/business-marketing-22/48/6-Growth-256.png",
    'Mark Attendance': 'https://cdn0.iconfinder.com/data/icons/scientific-study-4/48/3-Report-256.png',
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
                // Only render "Mark Attendance" link if user is admin
                (cardTitle !== 'Mark Attendance' || isAdmin === "Admin") && (
                  <Link
                    key={cardTitle}
                    to={cardTitle === 'Mark Attendance' ? '/attend/mark' : '/attend/view'}
                  >
                    <li className="card"> 
                      <p style={{ marginTop: "15px" }}>{cardTitle}</p>
                      <div className="card-image">
                        <img src={cardImages[cardTitle]} alt={cardTitle} />
                      </div>
                    </li>
                  </Link>
                )
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default AttendPage;
