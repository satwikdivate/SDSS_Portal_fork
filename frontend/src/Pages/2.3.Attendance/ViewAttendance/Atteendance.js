import React from 'react';
import Header from '../../../components/Header/Header';
// import Footer from '../../../components/Footer/Footer';
import { PieChart, Pie, Cell } from 'recharts';
// import "./Attend.css";

const Attendance = (role) => {
  const dateAndAttendanceData = [
    { date: '2023-10-01', attendance: 'Present' },
    { date: '2023-10-02', attendance: 'Absent' },
    { date: '2023-10-03', attendance: 'Present' },
    { date: '2023-11-01', attendance: 'Present' },
    { date: '2023-11-02', attendance: 'Present' },
    { date: '2023-11-03', attendance: 'Present' },
    { date: '2023-11-05', attendance: 'Present' },
    { date: '2023-01-01', attendance: 'Present' },
    { date: '2023-01-02', attendance: 'Absent' },
    { date: '2023-02-01', attendance: 'Present' },
    { date: '2023-02-02', attendance: 'Absent' },
    { date: '2023-03-01', attendance: 'Present' },
    { date: '2023-03-02', attendance: 'Absent' },
    { date: '2023-04-01', attendance: 'Present' },
    { date: '2023-04-02', attendance: 'Present' },
    { date: '2023-05-01', attendance: 'Present' },
    { date: '2023-05-02', attendance: 'Present' },
    { date: '2023-06-01', attendance: 'Present' },
    { date: '2023-06-02', attendance: 'Present' },
    { date: '2023-07-01', attendance: 'Present' },
    { date: '2023-07-02', attendance: 'Absent' },
    { date: '2023-08-01', attendance: 'Present' },
    { date: '2023-08-02', attendance: 'Absent' },
    { date: '2023-09-01', attendance: 'Present' },
    { date: '2023-09-02', attendance: 'Present' },
    { date: '2023-10-01', attendance: 'Present' },
    { date: '2023-10-02', attendance: 'Present' },
    { date: '2023-11-01', attendance: 'Present' },
    { date: '2023-11-02', attendance: 'Present' },
    { date: '2023-12-01', attendance: 'Present' },
    { date: '2023-12-02', attendance: 'Absent' },
    { date: '2027-09-01', attendance: 'Present' },
    { date: '2026-09-02', attendance: 'Present' },
    { date: '2025-10-01', attendance: 'Present' },
    { date: '2025-10-02', attendance: 'Present' },
    { date: '2025-11-01', attendance: 'Present' },
    { date: '2026-11-02', attendance: 'Present' },
    { date: '2025-12-01', attendance: 'Present' },
    { date: '2027-12-02', attendance: 'Absent' },
  ];

  const uniqueDates = new Set();
  const uniqueData = [];

  dateAndAttendanceData.forEach((entry) => {
    // Check if the date is not in the uniqueDates set
    if (!uniqueDates.has(entry.date)) {
      // Add the date to the uniqueDates set and push the entry to uniqueData
      uniqueDates.add(entry.date);
      uniqueData.push(entry);
    }
  });

  uniqueData.sort(

    (a, b) => new Date(a.date) - new Date(b.date)
  )
  // Initialize counters
  let presentCount = 0;
  let absentCount = 0;

  // Initialize an object to store month-wise data
  const monthWiseSummary = {};

  uniqueData.forEach((entry) => {
    if (entry.attendance === 'Present') {
      presentCount++;
    } else if (entry.attendance === 'Absent') {
      absentCount++;
    }

    // Extract the month from the date
    const [year, month] = entry.date.split('-');
    const monthKey = `${year}-${month}`;

    // Initialize the month-wise data if it doesn't exist
    if (!monthWiseSummary[monthKey]) {
      monthWiseSummary[monthKey] = {
        presentCount: 0,
        absentCount: 0,
      };
    }

    // Update the month-wise data
    if (entry.attendance === 'Present') {
      monthWiseSummary[monthKey].presentCount++;
    } else if (entry.attendance === 'Absent') {
      monthWiseSummary[monthKey].absentCount++;
    }
  });

  // Calculate the total entries for overall percentage
  const totalEntries = dateAndAttendanceData.length;

  // Calculate the total present and absent percentages
  const presentPercentage = (presentCount / totalEntries) * 100;
  const absentPercentage = (absentCount / totalEntries) * 100;

  // Create a single data structure for the pie chart
  const combinedData = [
    { name: 'Present', value: presentPercentage },
    { name: 'Absent', value: absentPercentage },
  ];

  const colors = ['#36A2EB', '#FF6384'];

  return (
    <>
      <Header />
      <div className='all-attend'>
        <div className='attendance'>
          <h1>Attendance</h1>
          <div className='attendance-content'>
            <div className='attendance-monthly'>
              <div className='attendance-card'>
                <h2>My Attendance</h2>
                <PieChart width={500} height={500}>
                  <Pie
                    data={combinedData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={250}
                    fill="#8884d8"
                  >
                    {combinedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>

                </PieChart>
                <p>Total Attendance Percentage: {presentPercentage.toFixed(3)}%</p>
              </div>
              <div className='attendance-summary'>
                <h3>Month-wise Summary</h3>
                <div className="summary-table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>Present</th>
                        <th>Absent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(monthWiseSummary).map(([month, summary]) => {
                        const monthName = new Date(2023, parseInt(month.split('-')[1]) - 1, 1).toLocaleString('en-US', { month: 'long' });
                        return (
                          <tr key={month}>
                            <td>{monthName + " " + month.split('-')[0]}</td>
                            <td>{summary.presentCount}</td>
                            <td>{summary.absentCount}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='attendance-date-table'>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {uniqueData.map((row, index) => (
                    <tr key={`row-${index}`}>
                      <td>{row.date}</td>
                      <td>{row.attendance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      {role === 'admin' &&
        <div className='attendance-admin'>


        </div>
      }

      {/* <Footer /> */}
    </>
  );
}

export default Attendance;
