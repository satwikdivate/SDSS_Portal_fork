// AttendanceMarking.js
import React, { useState } from 'react';

const AttendanceMarking = ({ students }) => {
  const [attendance, setAttendance] = useState({});

  const handleToggleAttendance = (studentId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [studentId]: !prevAttendance[studentId] || false,
    }));
  };

  return (
    <div className="attendance-marking">
      <h3>Mark Attendance</h3>
      <div className="student-list">
        {students.map((student) => (
          <div key={student._id} className="attendance-card">
            <input
              type="checkbox"
              id={`attendance-${student._id}`}
              checked={attendance[student._id] || false}
              onChange={() => handleToggleAttendance(student._id)}
            />
            <label htmlFor={`attendance-${student._id}`}>
              {student.firstName} {student.lastName}
            </label>
          </div>
        ))}
      </div>
      <button className="mark-attendance-btn">Mark Attendance</button>
    </div>
  );
};

export default AttendanceMarking;
