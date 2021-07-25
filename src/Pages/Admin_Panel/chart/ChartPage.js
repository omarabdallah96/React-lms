import React, { useState, useEffect } from "react";
import { Bar,Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";
import moment from "moment";
function ChartsPage(props) {
const today =moment().format('YYYY-MM-DD');

  const [attendance, setattendance] = useState([]);
  const request = async () => {
    await axios
      .get(`http://localhost:8000/api/attendancefile/${today}`)
      .then((response) => {
        setattendance(response.data);
      });
  };
  useEffect(() => {
    request();
  }, []);
  let attendancelabel = attendance.map(function (element) {
    return `${element.name}`;
  });

  let attendancelabelvalue = attendance.map(function (element) {
    return `${element.value}`;
  });

  const data = {
    labels: [...attendancelabel],

    datasets: [
      {
        // label: "# of Votes",
        data: [...attendancelabelvalue],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
    
    onClick={props.omar}
    style={{
      margin:"auto",
      textAlign:"center"
,        maxHeight: 1500,
      maxWidth:750,
    }} >
      <div
      style={{
        textAlign:"center"
,        maxHeight: 1500,
        maxWidth:750,
      }}
    >
      <h6 className="mt-5">Today's Attendance</h6>
      <Pie data={data} />
   </div>

    </div>
    
  );
}

export default ChartsPage;
