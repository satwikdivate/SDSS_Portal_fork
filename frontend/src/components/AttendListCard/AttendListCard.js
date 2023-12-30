// AttendanceMarking.js
import React, { useState } from 'react';
import "../../components/StudentListCard/Card.css";
import "./AttendanceListCard.css"

const AttendanceListCard= ({ student }) => {
  const [attendance, setAttendance] = useState({});

  const handleToggleAttendance = (studentId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: !prevAttendance[studentId] || false,
    }));
    
  };

  return (
    <div className="student-list">
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
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AttendanceListCard;
