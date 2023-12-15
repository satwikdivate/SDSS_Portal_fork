import React, { useEffect, useState, useCallback } from 'react';
import { getUser } from '../../Services/auth';
import { useDispatch } from 'react-redux';
import "./StudentDetails.css";
import Header from '../../components/Header/Header';
import Loading from '../../components/SmallLoader/Loader';


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
  }, [dispatch]); // Add dispatch to the dependency array

  useEffect(() => {
    getData(); // Call getData inside the useEffect
  }, [getData]);

  
  if (!data || data.length === 0) {
    return <Loading />;
  }

  const personalProfile = data?.personalProfile
  console.log(personalProfile)
  const familyProfile  = data?.familyProfile
  const academicProfile = data?.academicProfile

  
  return (

    <>
      <Header />
      <div className="details">
        <div className="bio-data">
          <h1>Student Bio Data</h1>
          <h2>Personal Information</h2>


          <div className="personal-info">
            <p>Username: {data?.id}</p>
            <p>Name: {data?.firstName + " " + data?.lastName}</p>
            <p>Standard: {"hello"}</p>
            <p>Email: {data?.email}</p>
            <p>Age: {personalProfile?.age}</p>
            <p>Date of Birth: {personalProfile?.dateOfBirth}</p>
            <p>Contact: {personalProfile?.contact}</p>
            <p>Blood Group: {personalProfile?.bloodGroup}</p>
          </div>
          <h2>Family Information</h2>
          <div className="family-info">
            
            <p>Mother's Name: {}</p>
            <p>Father's Name: {familyProfile?.fatherName}</p>
            <p>Contact: {familyProfile?.contact}</p>
            <p>Occupation: {familyProfile?.occupation}</p>
            <p>Income: {familyProfile?.income}</p>
            <p>Sibling Count: {familyProfile?.siblingCount}</p>
          </div>
          <h2>Academic Information</h2>
          <div className="academic-info">

            <p>School Name: {academicProfile?.schoolName}</p>
            <p>School Address: {academicProfile?.schoolAddress}</p>
            <p>Class Teacher: {academicProfile?.classTeacher}</p>
            <p>Medium: {academicProfile?.medium}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentBio;
