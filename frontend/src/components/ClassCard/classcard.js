import React from 'react'
import Header from '../Header/Header'
import "./classcard.css";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const Classcard = () => {
    const classes = [
        {
            grade: '5th',
            classTeacher: 'John Smith',
            classMonitor: 'Sarah Johnson',
        },
        {
            grade: '6th',
            classTeacher: 'Emily Davis',
            classMonitor: 'Michael Brown',
        },
        {
            grade: '7th',
            classTeacher: 'David Wilson',
            classMonitor: 'Olivia Anderson',
        },
        {
            grade: '8th',
            classTeacher: 'Sophia Miller',
            classMonitor: 'Daniel White',
        },
        {
            grade: '9th',
            classTeacher: 'James Lee',
            classMonitor: 'Ava Martinez',
        },
        {
            grade: '10th',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
        {
            grade: '11th',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
        {
            grade: '12th',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
        {
            grade: 'First Year',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
        {
            grade: 'Second Year',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
        {
            grade: 'Third Year',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
        {
            grade: 'Final Year',
            classTeacher: 'Ella Harris',
            classMonitor: 'William Moore',
        },
    ];
    return (
        <>
          <Header />
          <h3 className='heading-class'>Classes</h3>
          <div className='card-grid'>
            {classes.map((classInfo, index) => {
              const gradeNumber = classInfo.grade.replace(/th$/, '');
              return (
                <Link to={`/class/${gradeNumber}`} key={index}>
                  <div className='card-grade'>
                    <h2>Grade: {gradeNumber}</h2>
                    <p>Class Teacher: {classInfo.classTeacher}</p>
                    <p>Class Monitor: {classInfo.classMonitor}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <Footer />
        </>
      );
    };
    
    export default Classcard;