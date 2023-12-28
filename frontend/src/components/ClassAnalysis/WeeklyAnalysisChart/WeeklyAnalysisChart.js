// WeeklyAnalysisChart.js
import React from 'react';
import './WeeklyAnalysisChart.css';

function getDayFromDate(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

const WeeklyAnalysisChart = ({ reports }) => {
  return (
    <div className='weekly-analysis-chart'>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Subject</th>
            <th>Lesson</th>
          </tr>
        </thead>
        <tbody>
        {reports.slice(1).map((report, index) => (
            <tr key={index}>
              <td>{getDayFromDate(report.date)}</td>
              <td>{report.date.slice(0, 10)}</td>
              <td>{report.subject}</td>
              <td>{report.whatTeaches}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyAnalysisChart;
