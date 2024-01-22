import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { studentByClass } from "../../Services/operator";
import Header from "../Header/Header";
import "./ClassInfoPage.css";
import Loading from "../SmallLoader/Loader";
import StudentList from "../Student List/StudentList";
import ClassReport from "../ClassReport/ClassReport"; // Import your ClassReport component

const ClassInfoPage = () => {
  const { classsName } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [ClassTeacher, setTeacher] = useState("");
  const [isClassReportOpen, setIsClassReportOpen] = useState(false);
  const [classDetails, setClassDeails] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await studentByClass(classsName);
        setClassDeails(response);
        setStudents(response.data);
        setTeacher(
          response.classTeacher.firstName + " " + response.classTeacher.lastName
        );
      } catch (error) {
        console.error("Error fetching student details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [classsName]);

  const handleMarkAttendanceClick = () => {
    const classID = classsName;
    navigate(`/attend/mark/${classID}`);
  };

  const handleClasshistory = () => {
    const classID = classsName;
    navigate(`/class-analysis/${classID}`);
  };

  const handleOpenClassReport = () => {
    setIsClassReportOpen(true);
  };

  const handleCloseClassReport = () => {
    setIsClassReportOpen(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <Header />
      <div className="class-info-container">
        <h2>Class: {classsName}</h2>
        <h2>Class Teacher: {ClassTeacher}</h2>
        <h3>Student List</h3>
        <div className="class-feature">
          <button
            className="Atteendance-nagivate"
            onClick={handleMarkAttendanceClick}
          >
            Mark Attendance
          </button>
          <button className="Report--navigate" onClick={handleOpenClassReport}>
            Class Report
          </button>
          <button className="Report--navigate" onClick={handleClasshistory}>
            Classes History
          </button>
        </div>
        <ul className="student-list">
          <StudentList students={students} />
        </ul>
      </div>
      {isClassReportOpen && (
        <ClassReport
          onClose={handleCloseClassReport}
          classId={classsName}
          classteacher={classDetails.classTeacher._id}
        />
      )}
    </>
  );
};

export default ClassInfoPage;
