import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import "./Info.css";

export default function Info_Student(props) {
  const [student, setstudent] = useState([]);

  const getStudent = async (id) => {
    await API.get(`section_student/${id}`).then((res) => {
      const result = res.data;

      setstudent(result);

      console.log(result.class);
    });
  };

  useEffect(() => {
    getStudent(props.match.params.id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {student.map((student) => {
          return (
            <div className="col-md-4">
              <div
                className="card user-card "
                style={{
                  background: "#11101d",
                  borderRadius: 20,
                  color: "white",
                }}
              >
                <div className="card-header">
                  <h5 style={{ color: "white" }}>Profile</h5>
                </div>
                <div className="card-block">
                  <div className="user-image">
                    <img
                      src={`http://localhost:8000/storage/uploads/${student.photo}`}
                      className="img-radius"
                      alt="User-Profile-Image"
                    />
                  </div>
                  <h6 className="f-w-600 m-t-25 m-b-10">
                    {student.fname} {student.lname}{" "}
                  </h6>
                  <p className="text-muted">
                    {student.gender} Born {student.birthdate}
                  </p>
                  <hr />
                  <p className="text-muted m-t-15"></p>
                  <ul className="list-styled activity-leval">
                    <li className="active" />
                    <li className="active" />
                    <li className="active" />
                    <li className="active" />
                    <li className="active" />
                  </ul>
                  <div className="row">
                  <div className="col-4">
                      <img src="https://img.icons8.com/ios-filled/24/ffffff/student-center.png" />{" "}
                      {/* <i className="fa fa-suitcase" /> */}
                      <p>
                       &nbsp; {student.class} {student.sections}
                      </p>
                    </div>
                    <div className="col-4">
                      &nbsp; &nbsp;
                      <img src="https://img.icons8.com/ios-filled/24/e74c3c/water.png" />
                      {/* <i className="fa fa-plus" /> */}
                      &nbsp; &nbsp;
                      <p>{student.bloodtype}</p>
                    </div>
                   
                    <div className="col-4">
                      <i className="fa fa-phone" />
                      <p>{student.phone}</p>
                    </div>
                   
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
