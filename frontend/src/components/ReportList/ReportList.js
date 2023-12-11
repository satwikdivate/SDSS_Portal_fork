import React from 'react';
import "./ResportList.css"

const ReportList = ({ reports, onDeleteReport, role }) => {
  const handleDownloadReport = (report) => {
    // Implement the logic to download the report here.
    // You may need to retrieve the report file and initiate the download.

    // For demonstration purposes, we will simulate a download link.
    const downloadLink = document.createElement('a');
    downloadLink.href = report.file; // Provide the file URL or Blob here.
    downloadLink.download = report.monthName + '.pdf'; // Set the download filename.
    downloadLink.click();
  };

  const handleDeleteReport = (reportId) => {
    // Call the onDeleteReport function to delete the report with the given id.
    onDeleteReport(reportId);
  };

  return (
    <div className="report-list">
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <span>{report.monthName}</span>
            <div className='report-btns'>
              <button onClick={() => handleDownloadReport(report)}>Download</button>
              {role === 'Admin' && (
              <button onClick={() => handleDeleteReport(report.id)}>Delete</button>
              )}
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
