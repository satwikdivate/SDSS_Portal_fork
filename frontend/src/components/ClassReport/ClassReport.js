import React, { useState } from 'react';
import { format } from 'date-fns';
import './ClassReport.css'; // Update the import statement

const ClassReport =({ onClose }) => {
    const [lesson, setLesson] = useState('');
    const [numStudents, setNumStudents] = useState('');
    const [subject, setSubject] = useState('English');
    const [otherSubject, setOtherSubject] = useState('');
    const today = new Date();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Subject: ${subject}, Lesson: ${lesson}, Number of Students: ${numStudents}`);
        if (subject === 'Other') {
            console.log(`Other Subject Name: ${otherSubject}`);
        }
    };

    const handleSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setSubject(selectedSubject);
        if (selectedSubject !== 'Other') {
            setOtherSubject('');
        }
    };

    const handleClose = () => {
        // Call the onClose function passed from the parent component
        onClose();
      };
    
      return (
        <div className="ClassReport">
          <header className="ClassReport-header">
            <h1>Class Report</h1>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
                <p className="date-info">{`Date: ${format(today, 'MMMM d, yyyy')}`}</p>
                <p className="date-info">{`Day : ${format(today, 'EEEE')}`}</p>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label className="form-label">
                        Subject:
                        <select className="form-input" value={subject} onChange={handleSubjectChange}>
                            <option value="English">English</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Science">Science</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    {subject === 'Other' && (
                        <label className="form-label">
                            Other Subject Name
                            <input
                                className="form-input"
                                type="text"
                                value={otherSubject}
                                onChange={(e) => setOtherSubject(e.target.value)}
                            />
                        </label>
                    )}

                    <label className="form-label">
                        Lesson Taught
                        <input
                            className="form-input"
                            type="text"
                            value={lesson}
                            onChange={(e) => setLesson(e.target.value)}
                        />
                    </label>

                    <label className="form-label">
                        Number of Students Present
                        <input
                            className="form-input"
                            type="number"
                            value={numStudents}
                            onChange={(e) => setNumStudents(e.target.value)}
                        />
                    </label>

                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </form>
            </header>
        </div>
    );
}

export default ClassReport;
