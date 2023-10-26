import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/StudentListCard/Card'
import "./ListStudent.css"

const students = [
    {
        "name": "John William Doe",
        "contactNumber": "555-123-4567"
    },
    {
        "name": "Jane Robert Smith",
        "contactNumber": "555-987-6543"
    },
    {
        "name": "Bob Richard Johnson",
        "contactNumber": "555-456-7890"
    },
    {
        "name": "Alice Edward Brown",
        "contactNumber": "555-789-1234"
    },
    {
        "name": "David Michael Wilson",
        "contactNumber": "555-234-5678"
    },
    {
        "name": "Ella John Davis",
        "contactNumber": "555-567-8901"
    },
    {
        "name": "John William Doe",
        "contactNumber": "555-123-4567"
    },
    {
        "name": "Jane Robert Smith",
        "contactNumber": "555-987-6543"
    },
    {
        "name": "Bob Richard Johnson",
        "contactNumber": "555-456-7890"
    },
    {
        "name": "Alice Edward Brown",
        "contactNumber": "555-789-1234"
    },
    {
        "name": "David Michael Wilson",
        "contactNumber": "555-234-5678"
    },
    {
        "name": "Ella John Davis",
        "contactNumber": "555-567-8901"
    },
    {
        "name": "William Thomas Parker",
        "contactNumber": "555-345-6789"
    },
    {
        "name": "Sophia Elizabeth Turner",
        "contactNumber": "555-678-9012"
    },
    {
        "name": "Oliver James Mitchell",
        "contactNumber": "555-123-7890"
    },
    {
        "name": "Ava Grace Walker",
        "contactNumber": "555-987-2345"
    },
    {
        "name": "Daniel Benjamin Hughes",
        "contactNumber": "555-456-5678"
    },
    {
        "name": "Mia Charlotte Nelson",
        "contactNumber": "555-234-5678"
    }
];

const classD = {
    "Grade" : "5th",
    "Teacher": "Omkar Bhojane",
    "monitor": "Samir Choughule"
}


const ListStudent = () => {
    return (
        <div>
            <Header />
            <div className='grade'>
                <h1>Class : {classD.Grade}</h1>
            </div>
            <div className='class-details'>
                <div className='class-teacher'>
                    <p>Class Teacher : </p>
                    <h3>{classD.Teacher}</h3>
                </div>
                <div className='class-monitor'>
                    <p>Class Head :</p>
                    <h3>{classD.monitor}</h3>
                </div>
            </div>
            {students.map((student, index) => (
                <Card
                    key={index}
                    name={student.name}
                    contactNumber={student.contactNumber}
                />
            ))}
        </div>
    );
};

export default ListStudent;