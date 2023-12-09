import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for React Router v6
import Header from '../Header/Header';
import CreateClass from '../CreateClass/CreateClass';
import { getAllClass, getById, enrollStudent } from '../../Services/operator';
import './classcard.css';


const Classcard = () => {
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isAdmin, setAdmin] = useState("Student");
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  const userID = localStorage.getItem('loggedInId');


  const fetchUserData = async () => {
    try {
      const allClasses = await getAllClass();
      setClasses(allClasses.result);

      const teacherPromises = allClasses.result.map((classInfo) => getById(classInfo.classTeacher));
      const teachersData = await Promise.all(teacherPromises);
      setTeachers(teachersData.map((teacher) => teacher.data));

      setAdmin(user.role);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchUserData();
  }, []);

  const enrollClass = async (classID) => {
    try {
      console.log('Enrolling in class:', classID, userID);

      const resp = await enrollStudent(userID, classID);
      console.log('Enrollment successful!', resp);
      setEnrolledClasses((prevEnrolledClasses) => [...prevEnrolledClasses, classID]);
    } catch (e) {
      console.error('Failed to enroll:', e.message);
      alert('Enrollment failed. Please try again.');
    }
  };

  const redirectToClassInfo = (className) => {
    navigate(`/class/${className}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
      <Header />
      <h3 className='heading-class'>Classes</h3>
      <div className='card-grid'>
        
        {classes.map((classInfo, index) => {
          const teacher = teachers[index];
          const isEnrolled = enrolledClasses.includes(classInfo._id);
          return (
            <div key={classInfo._id} className='card-grade'>
              <h2>Standard: {classInfo.classsName}th</h2>
              <p>Class Teacher: {teacher?.firstName} {teacher?.lastName}</p>
              {isAdmin === "Student" && (
              <button
                className='enroll-class'
                onClick={() => enrollClass(classInfo._id)}
                disabled={isEnrolled}
              >
                {isEnrolled ? 'Enrolled' : 'Enroll Now'}
              </button>
              )}
              {isAdmin === "admin" && (
                <button
                  className='showallStudent'
                  onClick={() => redirectToClassInfo(classInfo._id)}
                >
                  <i className='bx bx-right-arrow-circle'></i>
                </button>
              )}
            </div>
          );
        })}
        <CreateClass />
      </div>
    </>
  );
};

export default Classcard;