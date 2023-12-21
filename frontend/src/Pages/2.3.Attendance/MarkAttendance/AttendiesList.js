import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { studentByClass, markAttendence } from '../../../Services/operator'; // Import your service function
import Header from '../../../components/Header/Header';
import '../../../components/ClassInfo/ClassInfoPage.css'
import Loading from '../../../components/SmallLoader/Loader';

const AttendiesList = () => {
    const { classsName } = useParams();
    const [students, setStudents] = useState([]);
    const [ClassTeacher, setTeacher] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [attendance, setAttendance] = useState([]);

    const handleToggleAttendance = (studentId) => {
        setAttendance((prevAttendance) => ({
            ...prevAttendance,
            [studentId]: !prevAttendance[studentId] || !prevAttendance[studentId],
        }));
    };



    const handleSubmit = async () => {
        try {
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear();

            const formattedDate = `${day}-${month}-${year}`;

            const allStudentAttendance = {};

            students.forEach((student) => {
                const status = attendance[student._id] ? 'Present' : 'Absent';
                const attendanceId = student.attendance

                allStudentAttendance[student._id] = {
                    status,
                    attendanceId,
                };
            });

            const userID = localStorage.getItem('loggedInId');

            await markAttendence(allStudentAttendance, userID, formattedDate);

            console.log('Attendance marked successfully');
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    };



    const filteredStudents = students.filter((student) =>
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await studentByClass(classsName);
                console.log(response);
                setStudents(response.data);
                setTeacher(response.classTeacher.firstName + ' ' + response.classTeacher.lastName);
            } catch (error) {
                console.error('Error fetching student details:', error);
            }finally {
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
                <h2>Class: {classsName}</h2>
                <h2>Class Teacher: {ClassTeacher}</h2>
                <h3>Student List</h3>
                <ul className='student-list'>
                    <input
                        type="text"
                        placeholder="Search by student name"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="student-list">
                        {filteredStudents.map((student) => (
                            <div key={student._id} className="card-stu">
                                <p>Roll No. : {student.id}</p>
                                <h3 htmlFor={`attendance-${student._id}`}>
                                    {student.firstName} {student.lastName}
                                </h3>
                                <div className='contact'>
                                    <input
                                        type="checkbox"
                                        id={`attendance-${student._id}`}
                                        checked={attendance[student._id] || false}
                                        onChange={() => handleToggleAttendance(student._id)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </ul>
                <div className="submitAttendance">
                    <button onClick={handleSubmit}>Submit Attendance</button>
                </div>
            </div>
        </>
    );
};

export default AttendiesList;
