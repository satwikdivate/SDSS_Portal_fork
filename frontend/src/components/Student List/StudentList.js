// src/components/Student List/StudentList.js
import React, { useState } from 'react';
import ListCard from '../StudentListCard/ListCard';

const StudentList = ({ students, isAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter((student) => {
    const fullName = (student.firstName + student.lastName).toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
});


  return (
    <div>
      <input
        type="text"
        placeholder="Search by student name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="student-list">
        {filteredStudents.map((student) => (
          <ListCard key={student._id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
