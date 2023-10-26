import React, { useState } from 'react';

const ReportForm = ({ onAddReport, onCancel }) => {
  const [monthName, setMonthName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!monthName.trim() || !selectedFile) {
      alert('Please fill in all fields.');
      return;
    }

    const newReport = {
      monthName,
      file: selectedFile,
    };

    if (onAddReport) {
      onAddReport(newReport);
    }

    // Clear the form fields
    setMonthName('');
    setSelectedFile(null);
  };

  return (
    <div className="report-form">
      <h2>Add Report</h2>
      <input
        type="text"
        placeholder="Month Name"
        value={monthName}
        onChange={(e) => setMonthName(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ReportForm;
