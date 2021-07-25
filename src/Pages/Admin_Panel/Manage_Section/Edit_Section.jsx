import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import IN from "../../../Components/Input";

export default function Edit_Admin(props) {
  const [name, setName] = useState("");
  const [maxStudents, setMaxstudents] = useState("");
  const [classroom_name, setClassroom_name] = useState("");

  const getSection = async (id) => {
    await API.get(`section/${id}`).then((res) => {
      const result = res.data[0];
      setName(result.name);
      setMaxstudents(result.max_students);
     setClassroom_name(result.class);
    });
  };

  const handleSave = async () => {
    const id = props.match.params.id;

    let reqBody = {
      name: name,
      max_students: maxStudents,
      classroom_name: classroom_name,
    };

    await API.put(`section/${id}`, reqBody);
    await props.history.push(`/section`);
  };

  useEffect(() => {
    getSection(props.match.params.id);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="card"
              
              style={{
                background: "#11101d ",
                borderRadius: 20,
                color: "white",
              }}>
                <br />
                <br />
                <center>                <h3>edit section</h3>
</center>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Class</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        readOnly
                        type="text"
                        className="form-control"
                        defaultValue={classroom_name}
                        // onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Section</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Max Students</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={maxStudents}
                        onChange={(e) => setMaxstudents(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-9 text-secondary">
                     
                      <input
                        type="button"
                        onClick={handleSave}
                        className="btn btn-primary px-4"
                        defaultValue="Save Changes"
                      />
                      &nbsp; &nbsp; &nbsp; &nbsp; 
                      <input
                        type="button"
                        onClick={() => props.history.push(`/section`)}
                        className="btn btn-danger px-4"
                        defaultValue="Cancel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //     <IN
    //         type="text"
    //         name="name"
    //         value={name}
    //         onChange={e => setName(e.target.value)}
    //         placeholder="Name"
    //     />
    //     <IN
    //         type="text"
    //         name="maxStudents"
    //         value={maxStudents}
    //         onChange={e => setMaxstudents(e.target.value)}
    //         placeholder="Max Students"
    //     />

    //     <Link
    //         name="save"
    //         onClick={handleSave}
    //     > Save </Link>

    //     <Link
    //         name="cancel"
    //         onClick={() => props.history.push(`/admin/list`)}
    //     >Cancel</Link>
    // </div>
  );
}
