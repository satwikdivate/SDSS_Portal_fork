import React, { useEffect, useState, useCallback } from "react";
import Header from "../../../components/Header/Header";
import { getIndivaulAttendence, getById } from "./../../../Services/operator";
import { PieChart, Pie, Cell } from "recharts";
import "./Attend.css";
import Loading from "../../../components/SmallLoader/Loader";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const userID = localStorage.getItem("loggedInId");

  const fetchData = useCallback(async () => {
    try {
      const user = await getById(userID);
      const attendanceId = user.data.attendance;
      const result1 = await getIndivaulAttendence(attendanceId);
      setAttendanceData(result1.attendance.slice(1));
      // console.log(result1.attendance.slice(1))
    } catch (error) {
      console.error("Error fetching attendance data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [userID]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      await fetchData();
    };

    fetchDataAndSetState();
  }, [fetchData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  // Check if uniqueData is defined before sorting
  attendanceData &&
    attendanceData.sort((a, b) => new Date(a.date) - new Date(b.date));

  attendanceData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // console.log(attendanceData)

  let presentCount = 0;
  let absentCount = 0;
  const monthWiseSummary = {};

  attendanceData.forEach((entry) => {
    if (entry.status === "Present") {
      presentCount++;
    } else if (entry.status === "Absent") {
      absentCount++;
    }

    // console.log(absentCount);

    const [day, month, year] = entry.data.split("-");
    console.log(day);
    const monthKey = `${year}-${month}`;

    if (!monthWiseSummary[monthKey]) {
      monthWiseSummary[monthKey] = {
        presentCount: 0,
        absentCount: 0,
      };
    }

    if (entry.status === "Present") {
      monthWiseSummary[monthKey].presentCount++;
    } else if (entry.status === "Absent") {
      monthWiseSummary[monthKey].absentCount++;
    }
  });

  const totalEntries = attendanceData.length;
  const presentPercentage = (presentCount / totalEntries) * 100;
  const absentPercentage = (absentCount / totalEntries) * 100;

  const combinedData = [
    { name: "Present", value: presentPercentage },
    { name: "Absent", value: absentPercentage },
  ];

  const colors = ["#36A2EB", "#FF6384"];

  return (
    <>
      <Header />
      <div className="all-attend">
        <div className="attendance">
          <h1>Attendance</h1>
          <div className="attendance-content">
            <div className="attendance-monthly">
              <div className="attendance-card">
                <h2>My Attendance</h2>
                <PieChart width={500} height={500}>
                  <Pie
                    data={combinedData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#8884d8"
                  >
                    {combinedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>
                </PieChart>
                <p>
                  Total Attendance Percentage: {presentPercentage.toFixed(3)}%
                </p>
              </div>
              <div className="attendance-summary">
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
                      {Object.entries(monthWiseSummary).map(
                        ([month, summary]) => {
                          const monthName = new Date(
                            2023,
                            parseInt(month.split("-")[1]) - 1,
                            1
                          ).toLocaleString("en-US", { month: "long" });
                          return (
                            <tr key={month}>
                              <td>{monthName + " " + month.split("-")[0]}</td>
                              <td>{summary.presentCount}</td>
                              <td>{summary.absentCount}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="attendance-date-table">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((entry) => (
                    <tr key={entry._id}>
                      <td>{entry.data}</td>
                      <td>{entry.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
