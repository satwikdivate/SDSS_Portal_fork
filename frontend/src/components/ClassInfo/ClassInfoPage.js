import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentByClass } from '../../Services/operator'; // Import your service function
import Header from '../Header/Header';
import './ClassInfoPage.css'

const ClassInfoPage = () => {
    const { classsName } = useParams();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                console.log(classsName);
                const response = await studentByClass(classsName);
                console.log(response)
                if (response && response.data && response.data.result) {
                    console.log(response.data.result);
                    setStudents(response.data.result);
                } else {
                    console.error('Invalid response:', response);
                }
            } catch (error) {
                console.error('Error fetching student details:', error);
            }
        };

        fetchStudents();
    }, [classsName]);

    return (
        <>
            <Header />
            <div className='class-info-container'>
                <h2>Class: {classsName}</h2>
                <h3>Student List</h3>
                <ul className='student-list'>
                    {students.map((student) => (
                        <li key={student._id}>
                            {student.firstName} {student.lastName}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ClassInfoPage;
