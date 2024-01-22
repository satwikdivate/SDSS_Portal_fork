import React, { useEffect, useState, useCallback } from "react";
import { getUser } from "../../Services/auth";
import { useDispatch } from "react-redux";
import "./StudentDetails.css";
import Header from "../../components/Header/Header";
import Loading from "../../components/SmallLoader/Loader";

function StudentBio() {
  const [data, setdata] = useState();
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      const result1 = await dispatch(getUser());
      setdata(result1);
    } catch (e) {
      console.log("ERROR AT FRONTEND:", e);
    }
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (!data || data.length === 0) {
    return <Loading />;
  }

  const personalProfile = data?.personalProfile;
  console.log(personalProfile);
  const familyProfile = data?.familyProfile;
  const academicProfile = data?.academicProfile;

  return (
    <>
      <Header />
      <div className="details">
        <div className="bio-data">
          <h1>Student Bio Data</h1>
          <h2>Personal Information</h2>

          <div className="personal-info">
            <p><span className="bold-text">Username:</span> {data?.id}</p>
            <p><span className="bold-text">Name:</span> {data?.firstName + " " + data?.lastName}</p>
            <p><span className="bold-text">Standard:</span> {"hello"}</p>
            <p><span className="bold-text">Email:</span> {data?.email}</p>
            <p><span className="bold-text">Age:</span> {personalProfile?.age}</p>
            <p><span className="bold-text">Date of Birth:</span> {personalProfile?.dateOfBirth}</p>
            <p><span className="bold-text">Contact:</span> {personalProfile?.contact}</p>
            <p><span className="bold-text">Blood Group:</span> {personalProfile?.bloodGroup}</p>
          </div>
          <h2>Family Information</h2>
          <div className="family-info">
            <p><span className="bold-text">Father's Name:</span> {familyProfile?.fatherName}</p>
            <p><span className="bold-text">Mother's Name:</span> {familyProfile?.motherName}</p>
            <p><span className="bold-text">Contact:</span> {familyProfile?.contact}</p>
            <p><span className="bold-text">Occupation:</span> {familyProfile?.occupation}</p>
            <p><span className="bold-text">Income:</span> {familyProfile?.income}</p>
            <p><span className="bold-text">Sibling Count:</span> {familyProfile?.siblingCount}</p>
          </div>
          <h2>Academic Information</h2>
          <div className="academic-info">
            <p><span className="bold-text">School Name:</span> {academicProfile?.schoolName}</p>
            <p><span className="bold-text">School Address:</span> {academicProfile?.schoolAddress}</p>
            <p><span className="bold-text">Class Teacher:</span> {academicProfile?.classTeacher}</p>
            <p><span className="bold-text">Medium:</span> {academicProfile?.medium}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentBio;
