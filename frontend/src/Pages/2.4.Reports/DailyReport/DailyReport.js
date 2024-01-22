import React, { useState } from 'react';
import styles from './DailyReport.module.css';
import Header from '../../../components/Header/Header';
import { markShlhaDilyAttendece } from '../../../Services/operator';
import toast from 'react-hot-toast';

const DailyReport = () => {
  const [studentCount615, setStudentCount615] = useState('');
  const [studentCount730, setStudentCount730] = useState('');
  const [studentCount830, setStudentCount830] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentCount615 || !studentCount730 || !studentCount830) {
      toast.error('Count is Missing');
      return;
    }

    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    console.log('Student Count at 6:15:', studentCount615);
    console.log('Student Count at 7:30:', studentCount730);
    console.log('Student Count at 8:30:', studentCount830);
    console.log('Current Date:', formattedDate);

    try {
      const response = await markShlhaDilyAttendece(
        studentCount615,
        studentCount730,
        studentCount830,
        formattedDate
      );
      console.log(response);
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.dailyReportContainer}>
        <h2>Daily Report</h2>
        <form className={styles.dailyReportForm} onSubmit={handleSubmit}>
          <label className={styles.dailyReportLabel}>
            Student count at 6:15:
            <input
              className={styles.dailyReportInput}
              type="number"
              value={studentCount615}
              onChange={(e) => setStudentCount615(e.target.value)}
            />
          </label>
          <br />

          <label className={styles.dailyReportLabel}>
            Student count at 7:30:
            <input
              className={styles.dailyReportInput}
              type="number"
              value={studentCount730}
              onChange={(e) => setStudentCount730(e.target.value)}
            />
          </label>
          <br />

          <label className={styles.dailyReportLabel}>
            Student count at 8:30:
            <input
              className={styles.dailyReportInput}
              type="number"
              value={studentCount830}
              onChange={(e) => setStudentCount830(e.target.value)}
            />
          </label>
          <br />

          <button className={styles.dailyReportButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DailyReport;
