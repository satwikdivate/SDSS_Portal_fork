import React from 'react';

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

  return (
    <div className="report-list">
      <h2>Reports List</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <span>{report.monthName}</span>
            {role === 'user' && 
            (<button onClick={() => handleDownloadReport(report)}>Download</button>)}
            {onDeleteReport && (
              <button onClick={() => onDeleteReport(report.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
