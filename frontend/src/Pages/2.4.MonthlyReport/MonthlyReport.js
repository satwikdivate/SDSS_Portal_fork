import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ReportList from './ReportList';
import ReportForm from './ReportForm';
import "./Report.css"

const MonthlyReport = (props) => {
  const [role, setRole] = useState('admin'); 
  const [showAddForm, setShowAddForm] = useState(false);
  const [reports, setReports] = useState([
    { id: 1, monthName: 'January', file: 'report-january.pdf' },
    { id: 2, monthName: 'February', file: 'report-february.pdf' },
    { id: 3, monthName: 'March', file: 'report-march.pdf' },
  ]);

  useEffect(() => {
    setRole(props.role);
    if (props.role === 'user') {
      // Fetch and set the list of reports for regular users
      // Example: fetchReportsForUser().then(reports => setReports(reports));
    }
  }, [props.role]);

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
        {role === 'admin' && (
          <div className="report-content">
            <h1>Monthly Report</h1>
            <div className="report-nav">
              <button className="add-report-btn" onClick={toggleAddForm}>
              <i class='bx bxs-folder-plus' ></i>
                Add Report
              </button>
              <button className="edit-report-btn"><i class='bx bxs-edit-alt' ></i>Edit Report</button>
              <button className="delete-report-btn"><i class='bx bxs-folder-minus' ></i>Delete Report</button>
            </div>
            {showAddForm && (
              <ReportForm onAddReport={handleAddReport} onCancel={toggleAddForm} />
            )}
            <ReportList reports={reports} onDeleteReport={handleDeleteReport} />
          </div>
        )}
        {role === 'user' && (
          <div className="report-content">
            <h1>मासिक आढावा</h1>
            <ReportList reports={reports} role = {role} />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MonthlyReport;
