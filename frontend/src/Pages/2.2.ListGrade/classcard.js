import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import CreateClass from "../../components/CreateClass/CreateClass";
import { getAllClass, getById  } from "../../Services/operator";
import "./classcard.css";

const Classcard = () => {
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const userID = localStorage.getItem("loggedInId");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const allClasses = await getAllClass();
        setClasses(allClasses.result);

        const teacherPromises = allClasses.result.map((classInfo) =>
          getById(classInfo.classTeacher)
        );

        const teachersData = await Promise.all(teacherPromises);
        setTeachers(teachersData.map((teacher) => teacher.data));

        setAdmin(role === "Admin" || role === "Operator");

        // Build a set of enrolled classes for the current user
        const enrolledSet = new Set();
        allClasses.result.forEach((classObj) => {
          const students = classObj.studentList;
          if (students.includes(userID)) {
            enrolledSet.add(classObj._id);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  },[] );
  

  const redirectToClassInfo = (className) => {
    navigate(`/class/${className}`);
  };

  console.log(isAdmin);
  return (
    <>
      <Header />
      <h3 className="heading-class">Classes</h3>
      <div className="card-grid">
        {classes.map((classInfo, index) => {
          const teacher = teachers[index];

          return (
            <div key={classInfo._id} className="card-grade">
              <h2>Standard: {classInfo.classsName}th</h2>
              <p>
                Class Teacher: {teacher?.firstName} {teacher?.lastName}
              </p>
              {(role==="Admin" || role==="Operator") && (
                <button
                  className="showallStudent"
                  onClick={() => redirectToClassInfo(classInfo._id)}
                >
                  <i className="bx bx-right-arrow-circle"></i>
                </button>
               
              ) 
              }
            </div>
          );
        })}
        {isAdmin && <CreateClass />}
      </div>
    </>
  );
};

export default Classcard;
