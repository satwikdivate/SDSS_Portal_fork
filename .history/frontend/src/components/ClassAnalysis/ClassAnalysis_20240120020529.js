// ClassAnalysis.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDailyUpdateClass } from "../../Services/operator"; // Import your report fetching service
import Header from "../Header/Header";
import Loading from "../../components/SmallLoader/Loader";
import WeeklyAnalysisClass from "./WeeklyAnalysisChart/WeeklyAnalysisChart";
import "./ClassAnalysis.css";
const ClassAnalysis = () => {
  const { classsName } = useParams();
  console.log(classsName);
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Replace getClassReports with your actual service function to fetch weekly reports
        const response = await getDailyUpdateClass(classsName);
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching class reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [classsName]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="class-analysis-container">
        <h2>Class Analysis: {classsName}</h2>
        <h3>Weekly Analysis</h3>
        <WeeklyAnalysisClass reports={reports} />
      </div>
    </>
  );
};

export default ClassAnalysis;
