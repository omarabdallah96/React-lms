import React from "react";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ChartsPage from "../chart/ChartPage";

function Home(props) {
  const [total, settotal] = useState([]);

  const get_number_student = async () => {
    try {
      const data = await axios.get("http://localhost:8000/api/total");
      console.log(data.data);
      settotal(data.data);
      // settotal(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    get_number_student();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card bg-c-blue order-card">
            <div
            style={{cursor:"pointer"}}
              className="card-block"
              onClick={() => props.history.push(`/student/`)}
            >
              <h6 className="m-b-20">Total students numbers</h6>
              <h2 className="text-right">
                <i></i>
                <img
                  class="fa fa-user f-left"
                  src="https://img.icons8.com/ios/64/000000/student-male.png"
                />
                <span>{total.student_number}</span>
              </h2>
              <p className="m-b-0">
                <span className="f-right"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-3">
          <div
                      style={{cursor:"pointer"}}

            className="card bg-c-green order-card"
            onClick={() => props.history.push(`/classroom`)}
          >
            <div className="card-block">
              <h6 className="m-b-20">Total Classes Numbers</h6>
              <h2 className="text-right">
                <img
                  className="fa fa-rocket f-left"
                  src="https://img.icons8.com/wired/64/000000/classroom.png"
                />
                {/* <i className="fa fa-rocket f-left" /> */}
                <span>{total.class_number}</span>
              </h2>
              <p className="m-b-0">
                <span className="f-right"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-3">
          <div
                      style={{cursor:"pointer"}}

            className="card bg-primary order-card"
            onClick={() => props.history.push(`/section`)}
          >
            <div className="card-block">
              <h6 className="m-b-20">Total Sections Numbers</h6>
              <h2 className="text-right">
                {/* <i className="fa fa-refresh f-left" /> */}
                <img
                  className="fa fa-refresh f-left"
                  src="https://img.icons8.com/ios/64/000000/door.png"
                />
                <span>{total.section_number}</span>
              </h2>
              <p className="m-b-0">
                <span className="f-right"></span>
              </p>
            </div>
          </div>
        </div>
        <div
                    style={{cursor:"pointer"}}

          onClick={() => props.history.push(`/admin`)}
          className="col-md-4 col-xl-3"
        >
          <div className="card bg-c-pink order-card">
            <div className="card-block">
              <h6 className="m-b-20">Total Users Numbers</h6>
              <h2 className="text-right">
                <img
                  className="fa fa-credit-card f-left"
                  src="https://img.icons8.com/dotty/64/000000/admin-settings-male.png"
                />
                <i />
                <span>{total.user_number}</span>
              </h2>
              <p className="m-b-0">
                <span className="f-right"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChartsPage omar={()=>props.history.push('/attendance')} />
    </div>
  );
}

export default Home;
