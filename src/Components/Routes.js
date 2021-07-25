import { Switch, Route, Link, Redirect } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Create_Admin from "../Pages/Admin_Panel/Manage_Admin/Create_Admin";
import List_Admin from "../Pages/Admin_Panel/Manage_Admin/List_Admin";
import Edit_Admin from "../Pages/Admin_Panel/Manage_Admin/Edit_Admin";
import Edit_Student from "../Pages/Admin_Panel/Manage_Student/Edit_Student";
import List_Student from "../Pages/Admin_Panel/Manage_Student/List_Student";
import Info_Student from "../Pages/Admin_Panel/Manage_Student/Info_Student";
import View_student from "../Pages/Admin_Panel/Manage_Student/View_Student";

import ChartsPage from "../Pages/Admin_Panel/chart/ChartPage";
import Attend_total from "../Pages/Admin_Panel/chart/All_Attendance";

import List_Section from "../Pages/Admin_Panel/Manage_Section/List_Section";
import Create_Section from "../Pages/Admin_Panel/Manage_Section/Create_Section";
import Edit_Section from "../Pages/Admin_Panel/Manage_Section/Edit_Section";
import List_Classroom from "../Pages/Admin_Panel/Manage_Classroom/List_Classroom";
import Edit_Classroom from "../Pages/Admin_Panel/Manage_Classroom/Edit_Classroom";
import Create_Classroom from "../Pages/Admin_Panel/Manage_Classroom/Create_Classroom";
import List_Attendance from "../Pages/Admin_Panel/Manage_Attendance/List_Attendance";
import Take_attend from "../Pages/Admin_Panel/Manage_Attendance/Take_attend";
import "./Sidebar.css";

import Home from "../Pages/Admin_Panel/Home/Home";
import React, { useState, useEffect } from "react";
import Login from "../Pages/Admin_Panel/login/Login";
import { setCookie, getCookie } from "../cookie";

import Create_Student from "../Pages/Admin_Panel/Manage_Student/Create_Student";
import { removeCookie } from "../cookie";

export default function Routes() {
  const [side, setside] = useState("sidebar");
  const [open, setopen] = useState(false);

  const togle = () => {
    if (!open) {
      setside("sidebar active");
      setopen(true);
    } else {
      setside("sidebar");
      setopen(false);
    }
  };

  const email = getCookie("email");
  const password = getCookie("password");

  const handleLogout = () => {
    removeCookie("email");
    removeCookie("password");
    window.location.reload();
  };

  return (
    <div>
      <div className={side} style={{ display: email ? "block" : "none" }}>
        <div className="logo_content">
          <div className="logo">
            {/* <i className="bx bxl-c-plus-plus" /> */}
            <img src="https://img.icons8.com/ios-filled/24/ffffff/school.png" />
            &nbsp; &nbsp;
            {/* <img style={{maxHeight:24,maxWidth:24}} src="./Logo.png" alt="" /> */}
            <div className="logo_name">LMS</div>
          </div>
          <i className="bx bx-menu" onClick={togle} id="btn" />
        </div>
        <ul className="nav_list">
          <li>
            <i className="bx bx-search" />
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          <li>
            <Link to="/home">
              <i class="bx bxs-home"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <Link to="/admin">
              <i className="bx bx-user" />
              <span className="links_name">Users</span>
            </Link>
            <span className="tooltip">Users</span>
          </li>
          <li>
            <Link to="/student">
              <i className="bx bxs-graduation"></i>
              <span className="links_name">Students</span>
            </Link>
            <span className="tooltip">Students</span>
          </li>
          <li>
            <Link to="/section">
              <i className="bx bxs-door-open"></i>
              <span className="links_name">Sections</span>
            </Link>
            <span className="tooltip">Sections</span>
          </li>
          <li>
            <Link to="/classroom">
              <i class="bx bx-category"></i>
              <span className="links_name">Classrooms</span>
            </Link>
            <span className="tooltip">Classrooms</span>
          </li>
          <li>
            <Link to="/attendance">
              <i class="bx bx-calendar-check"></i>
              <span className="links_name">Attendance</span>
            </Link>
            <span className="tooltip">Attendance</span>
          </li>
          <li>
            <Link to="/reports">
              <i className="bx bx-pie-chart-alt-2" />
              <span className="links_name">Reports</span>
            </Link>
            <span className="tooltip">Reports</span>
          </li>
          <li>
            <Link onClick={handleLogout} to="/">
              <i class="bx bx-log-out"></i>
              <span className="links_name">Logout</span>
            </Link>
            <span className="tooltip">Logout</span>
          </li>
          <li></li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src="profile.jpg" alt="" />
              <div className="name_job"></div>
            </div>
            {/* <button > */}
              <i    lassName="" id="log_out" />
              <span className="links_name">Reports</span>

            {/* </button> */}
          </div>
          
        </div>
      </div>
      <div className="home_content" style={{ background: "white" }}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              email ? <Redirect {...props} to="/home" /> : <Login {...props} />
            }
          />

          <Route
            exact
            path="/home"
            render={(props) =>
              !email ? <Redirect {...props} to="/" /> : <Home {...props} />
            }
          />

          <Route
            exact
            path="/admin/create"
            render={(props) =>
              !email ? (
                <Redirect {...props} to="/" />
              ) : (
                <Create_Admin {...props} />
              )
            }
          />

          <Route
            exact
            path="/admin"
            render={(props) =>
              !email ? <Redirect {...props} to="/" /> : <List_Admin />
            }
          />

          <Route
            exact
            path="/admin/edit/:id"
            render={(props) =>
              !email ? <Redirect to="/" /> : <Edit_Admin />
            }
          />

          <Route
            exact
            path="/student"
            render={(props) =>
              !email ? <Redirect to="/" /> : <List_Student />
            }
          />

          <Route exact path="/student/create" component={Create_Student} />
          <Route exact path="/student/view/:id" component={View_student} />


          <Route exact path="/student/edit/:id" component={Edit_Student} />
          <Route exact path="/section/info/:id" component={Info_Student} />
          <Route exact path="/section" component={List_Section} />
          <Route exact path="/section/create" component={Create_Section} />
          <Route exact path="/section/edit/:id" component={Edit_Section} />
          <Route exact path="/classroom" component={List_Classroom} />
          <Route exact path="/classroom/create" component={Create_Classroom} />

          <Route exact path="/classroom/edit/:id" component={Edit_Classroom} />
          <Route exact path="/attendance" component={List_Attendance} />
          <Route
            exact
            path="/section/take_attend/:id"
            component={Take_attend}
          />

          <Route exact path="/reports" component={Attend_total} />
        </Switch>
      </div>
    </div>
  );
}
