import { useState, useEffect } from "react";
import API from "../../../api";
import Status from "../../../Components/Attend_status";
import moment from "moment";

function Take_attend(props) {
  const today = moment().format("YYYY-MM-DD");

  const id = props.match.params.id;
  const [students, setStudents] = useState([]);
  const [section_name, setsectionname] = useState("");
  const [section_id, setsectionid] = useState("");
  const [status, setStatus] = useState("Present");

  const [class_name, setclassname] = useState("Grade");

  const get_section_studens = async () => {
    try {
      const data = await API.get(`get_not_attend_today/${id}/${today}`);
      setStudents(data.data);
      setclassname(data.data[0].classroom_name);
      setsectionname(data.data[0].section_name);
      console.log(data.data[0].sections);
    } catch {
      console.log("error");
    }
  };
  const set_status = async (student_id) => {
    let reqBody = {
      student_id: student_id,
      section_id: id,
      date: today,
      label: status,
    };
    await API.post(`attendance/`, reqBody);
    let filter = [...students].filter(
      (students) => students.student_id !== student_id
    );
    setStudents(filter);
  };
  useEffect(() => {
    get_section_studens(props.match.params.id);
  }, []);

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="card"
              style={{
                background: "#11101d ",
                borderRadius: 20,
                color: "white",
              }}
            >
              <br />
              <br />
              <center><h3>Take Daily Attendance</h3></center>
              <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">
                  {class_name} {section_name}, attendance
                </h5>
              </div>
              <div class="table-responsive">
                <table
                  class="table no-wrap user-table mb-0"
                  style={{
                    background: "#11101d ",
                    borderRadius: 20,
                    color: "white",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="border-0 text-uppercase font-medium"
                      >
                       First Name
                      </th>
                      <th
                        scope="col"
                        class="border-0 text-uppercase font-medium"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        class="border-0 text-uppercase font-medium"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr>
                        <td>
                          <h5 class="font-medium mb-0">
                            {student.student_fname}
                          </h5>
                        </td>
                        <td>
                          <span class="text-muted">
                            {student.student_lname}
                          </span>
                        </td>

                        <td>
                          <Status omar={(e) => setStatus(e.target.value)} />
                        </td>

                        <td>
                          <img
                          style={{cursor:"pointer"}}
                            onClick={() => set_status(student.student_id)}
                            src="https://img.icons8.com/material-outlined/32/27ae60/checkmark.png"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Take_attend;
