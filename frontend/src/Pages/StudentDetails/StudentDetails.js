import React from 'react';
import "./StudentDetails.css";
import Header from '../../components/Header/Header';

function StudentBio() {
    const student = {
        "Name": "John Doe",
        "address": "123 Main St, City, Country",
        "parentDetails": {
          "fatherName": "Mike Doe",
          "motherName": "Jane Doe",
          "contactDetails": "mike.doe@email.com, jane.doe@email.com",
          "contactNumber" : "9011533885, 8149151587",
        },
        "schoolDetails": {
          "schoolName": "ABC High School",
          "schoolAddress": "456 Elm St, City, Country"
        },
        "educationDetails": {
          "grade": "10th",
          "marks": "95%",
          "classTeacher": "Mrs. Smith"
        },
        "familyDetails": {
          "siblings": 2,
          "siblingsNames": "Alice Doe, Bob Doe"
        },
        "documentDetails": {
          "aadharCard": true,
          "panCard": true,
          "bankAccount": false,
          "casteCertificate": false,
          "incomeCertificate": true
        },
        "incomeDetails": {
          "fatherIncome": "50000 USD",
          "motherIncome": "45000 USD"
        },
        "previousYearEducation": [
          {
            "grade": "9th",
            "marks": "92%",
            "classTeacher": "Mr. Johnson"
          },
          {
            "grade": "8th",
            "marks": "88%",
            "classTeacher": "Miss White"
          }
        ]
    };
    // const [student, setStudent] = useState(null);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get('/api/students');
    //             setStudent(response.data[0]); // Assuming you're displaying the data for one student
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
        <Header />
        <div className="details">
            {student && (
                <div>
                    <h1>Vardhak Details</h1>
                    <h4><p className="section-title">Name</p> {student.Name}</h4>
                    <p className="section-title">Address</p>
                    <p><strong>Address:</strong> {student.address}</p>

                    <h2 className="section-title">Parent Details</h2>
                    <p><strong>Father's Name:</strong> {student.parentDetails.fatherName}</p>
                    <p><strong>Mother's Name:</strong> {student.parentDetails.motherName}</p>
                    <p><strong>Contact Details:</strong> {student.parentDetails.contactDetails}</p>
                    <p><strong>Contact Details:</strong> {student.parentDetails.contactNumber}</p>

                    <h2 className="section-title">School Details</h2>
                    <p><strong>School Name:</strong> {student.schoolDetails.schoolName}</p>
                    <p><strong>School Address:</strong> {student.schoolDetails.schoolAddress}</p>

                    <h2 className="section-title">Education Details</h2>
                    <p><strong>Grade:</strong> {student.educationDetails.grade}</p>
                    <p><strong>Marks:</strong> {student.educationDetails.marks}</p>
                    <p><strong>Class Teacher:</strong> {student.educationDetails.classTeacher}</p>


                    <h2 className="section-title">Previous Year Education Details</h2>
                    <table className="education-table">
                        <h2>Previous Year Education Details</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Grade</th>
                                    <th>Marks</th>
                                    <th>Class Teacher</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.previousYearEducation.map((edu, index) => (
                                    <tr key={index}>
                                        <td>{edu.grade}</td>
                                        <td>{edu.marks}</td>
                                        <td>{edu.classTeacher}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </table>
                </div>
            )}
        </div>
        </>
    );
}

export default StudentBio;
