import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentByClass } from '../../Services/operator';
import Header from '../Header/Header';
import './ClassInfoPage.css'
import Loading from '../../components/SmallLoader/Loader';
import StudentList from '../Student List/StudentList';

const ClassInfoPage = () => {
    const { classsName } = useParams();
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [ClassTeacher, setTeacher] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                // console.log(classsName);
                const response = await studentByClass(classsName);
                console.log(response)
                setStudents(response.data);
                setTeacher(response.classTeacher.firstName + " " + response.classTeacher.lastName);
            }
            catch (error) {
                console.error('Error fetching student details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, [classsName]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <div className='class-info-container'>
                {console.log(classsName)}
                <h2>Class: {classsName}</h2>
                <h2>Class Teacher: {ClassTeacher}</h2>
                <h3>Student List</h3>
                <ul className='student-list'>
                    <StudentList students={students} />
                </ul>
            </div>
        </>
    );
};

export default ClassInfoPage;
