import React, { useState } from 'react';
import ListCard from '../StudentListCard/ListCard';

const StudentList = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by student name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="student-list">
        {filteredStudents.map((student) => (
          <ListCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
