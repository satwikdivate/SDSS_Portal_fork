import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import "./../2.0.Home/Body.css";

const Reports = () => {
    //   const isAdmin = localStorage.getItem('role');

    const cardImages = {
        'Daily Report': 'https://cdn3.iconfinder.com/data/icons/business-strategy-7/48/19-Presentation-256.png',
        'Monthly Report': "https://cdn2.iconfinder.com/data/icons/free-simple-line-mix/48/8-Medical_report-512.png",
        'Last Year Report': "https://cdn3.iconfinder.com/data/icons/business-strategy-7/48/20-Business_Planning-256.png",
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
                                <Link key={cardTitle} to={`/reports/${cardTitle.toLowerCase().replace(' ', '-')}`}>
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

export default Reports;
