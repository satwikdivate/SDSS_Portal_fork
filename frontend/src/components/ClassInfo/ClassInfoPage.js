import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentByClass } from '../../Services/operator'; // Import your service function
import Header from '../Header/Header';
import './ClassInfoPage.css'
import StudentList from '../Student List/StudentList';

const ClassInfoPage = () => {
    const { classsName } = useParams();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                // console.log(classsName);
                const response = await studentByClass(classsName);
                // console.log(response.data)
                setStudents(response.data.data);
            }
            catch (error) {
            console.error('Error fetching student details:', error);
        }
    };

    fetchStudents();
}, [classsName]);

return (
    <>
        <Header />
        <div className='class-info-container'>
            {console.log(classsName)}
            <h2>Class: {classsName}</h2>
            <h2>Class Teacher: {}</h2>
            <h3>Student List</h3>
            <ul className='student-list'>
                <StudentList students={students} />
            </ul>
        </div>
    </>
);
};

export default ClassInfoPage;
