import React from 'react';
import "./Card.css";

const ListCard = ({student}) => {
  return (
    <div className='student-list'>
      <div className="card-stu" key={student._id}>
        <h3>{student?.firstName + " " + student?.lastName}</h3>
        <div className='contact'>
        <p>Contact Number: {student?.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
