import React from 'react';
import "./Card.css";

const Card = (student) => {
  return (
    <div className='student-list'>
      <div className="card-stu" key={student.name}>
        <h3>{student.name}</h3>
        <div className='contact'>
        <p>Contact Number: {student.contactNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
