import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ReportList from '../../components/ReportList/ReportList';
import ReportForm from './ReportForm';
import "./Report.css"
import { getAllMonthReports } from '../../Services/operator';

const MonthlyReport = () => {
  const role = localStorage.getItem('role');
  const [showAddForm, setShowAddForm] = useState(false);
  const [reports, setReports] = useState([]);

  const fetchReports = async () =>{
      const response = await getAllMonthReports(); 
      console.log(response)
      setReports(response.data);
  }
  
  useEffect(() => {
    fetchReports();
  
}, []);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddReport = (newReport) => {
    // You can implement the logic to add a new report here
    // Example: addReport(newReport).then(response => { });
    // After successfully adding the report, you can update the reports state and close the form.
    newReport.id = reports.length + 1; // Generate a unique ID (replace with actual logic)
    setReports([...reports, newReport]);
    setShowAddForm(false);
  };

  const handleDeleteReport = (reportId) => {
    // Implement the logic to delete a report
    // Example: deleteReport(reportId).then(response => { });
    // After successfully deleting the report, update the reports state.
    const updatedReports = reports.filter(report => report.id !== reportId);
    setReports(updatedReports);
  };

  return (
    <>
      <Header />
      <div className="report-container">

        <div className="main-content">
          {role === 'Admin' && (
            <div className="report-content">
              <h1>Monthly Report</h1>
              <div className="report-nav">
                <button className="add-report-btn" onClick={toggleAddForm}>
                  <i class='bx bxs-folder-plus' ></i>
                  Add Report
                </button>
              </div>
              {showAddForm && (
                <ReportForm onAddReport={handleAddReport} onCancel={toggleAddForm} />
              )}
              <ReportList reports={reports} role={role} onDeleteReport={handleDeleteReport} />
            </div>
          )}
          {role === 'Student' && (
            <div className="report-content">
              <h1>मासिक आढावा</h1>
              <ReportList reports={reports} role={role} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MonthlyReport;
