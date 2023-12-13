import React from 'react';
import './../2.0.Landing/Body.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const AttendPage = () => {

  const isAdmin = localStorage.getItem('role');


  const cardImages = {
    'View Attendance': "https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-07-256.png",
    'Mark Attendance': 'https://i.pinimg.com/736x/91/30/da/9130da19ff4982a9f4931b3b14e4d09a.jpg',
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
