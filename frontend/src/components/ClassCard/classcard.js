import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./classcard.css";
import { useSelector } from 'react-redux';
import CreateClass from '../CreateClass/CreateClass';
import { getAllClass, getById, enrollStudent } from '../../Services/operator';

const Classcard = () => {
  const { user } = useSelector((state) => state.auth);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isAdmin, setAdmin] = useState(false);

  const enrollClass = async (classID) => {
    try {
      await enrollStudent(user._id, classID);
    } catch (e) {
      console.error("Failed to enroll");
    }
  };

  useEffect(() => {
    console.log(user);
    const check = () => {
      if (user.role === "Admin") {
        setAdmin(true);
      }
    }

    const getClasses = async () => {
      try {
        const allClasses = await getAllClass();
        console.log(allClasses.result);
        setClasses(allClasses.result);
      } catch (e) {
        console.log("Failed to fetch Classes");
      }
    };

    getClasses();
    check();

  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teacherPromises = classes.map((classInfo) => getById(classInfo.classTeacher));
        const teachersData = await Promise.all(teacherPromises);
        setTeachers(teachersData.map((teacher) => teacher.data));
      } catch (error) {
        console.log('Error fetching teacher details:', error);
      }
    };

    fetchTeachers();
  }, [classes]);

  return (
    <>
      <Header />
      <h3 className='heading-class'>Classes</h3>
      <div className='card-grid'>
        {classes.map((classInfo, index) => {
          const teacher = teachers[index];
          return (
            <div key={classInfo._id} className='card-grade'>
              <h2>Standard: {classInfo.classsName}th</h2>
              <p>Class Teacher: {teacher?.firstName} {teacher?.lastName}</p>
              <button className='enroll-class' onClick={() => enrollClass(classInfo._id)}>Enroll Now</button>
              {isAdmin &&
                <button className='showallStudent' >
                  <i class='bx bx-right-arrow-circle'></i>
                </button>
              }
            </div>
          );
        })}
        <CreateClass />
      </div>
    </>
  );
};

export default Classcard;
