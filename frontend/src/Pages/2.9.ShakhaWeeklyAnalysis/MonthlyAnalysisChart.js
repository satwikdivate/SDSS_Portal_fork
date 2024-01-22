// MonthlyAnalysisChart.js
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getStudentDailyAttendence } from "../../Services/operator";
import styles from "./MonthlyAnalysisChart.module.css";
import Header from "../../components/Header/Header";

const MonthlyAnalysisChart = () => {
  const [dailyData, setDailyData] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Fetch all data and then filter based on selected week, month, and year
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const result = await getStudentDailyAttendence();
        // Filter data based on the selected week, month, and year
        const filteredData = result.data.filter((entry) => {
          const entryWeek = getWeekNumber(entry.date);
          return (
            entry.date.split("-")[1] === selectedMonth &&
            entry.date.split("-")[2] === selectedYear
          );
        });
        setDailyData(filteredData);

        console.log(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchChartData();
  }, [selectedWeek, selectedMonth, selectedYear]);

  // Mock data for dropdowns
  const weekOptions = [
    { value: "1", label: "Week 1" },
    { value: "2", label: "Week 2" },
    { value: "3", label: "Week 3" },
    { value: "4", label: "Week 4" },
    { value: "5", label: "Week 5" },
  ];

  const monthOptions = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const yearOptions = [
    { value: "2023", label: "2023" },
    // Add more years as needed
  ];

  // Helper function to get the week number for a given date
  const getWeekNumber = (dateString) => {
    const date = new Date(dateString);
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const days = Math.ceil(
      ((date - oneJan) / 86400000 + oneJan.getDay() + 1) / 7
    );
    return days;
  };

  return (
    <>
    <Header />
      <div className={styles.monthlyAnalysisChart}>
        <div className={styles.dropdowns}>
          <div className={styles.dropdownContainer}>
            <label className={styles.label}>Select Week:</label>
            <select
              className={styles.select}
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
            >
              <option value="">-- Select Week --</option>
              {weekOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.dropdownContainer}>
            <label className={styles.label}>Select Month:</label>
            <select
              className={styles.select}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">-- Select Month --</option>
              {monthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.dropdownContainer}>
            <label className={styles.label}>Select Year:</label>
            <select
              className={styles.select}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">-- Select Year --</option>
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <LineChart width={1200} height={600} data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 80]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="startCount"
            stroke="#ff0000"
            name="Starting Count"
          />
          <Line
            type="monotone"
            dataKey="MiddleCount"
            stroke="#00ff00"
            name="Middle Count"
          />
          <Line
            type="monotone"
            dataKey="endCount"
            stroke="#0000ff"
            name="Ending Count"
          />
        </LineChart>
      </div>
    </>
  );
};

export default MonthlyAnalysisChart;
