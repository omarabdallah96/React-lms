import React, { useState, useEffect } from "react";
import API from "../../../api";
import Input from "../../../Components/Input";
import BT from "../../../Components/Button";

export default function Create_Classroom(props) {
  // console.log(props);

  const [name, setName] = useState("");

  const handleSave = async () => {
    let reqBody = {
      name: name,
    };

    // await fetch("http://127.0.0.1:8000/api/classroom", {
    //     method: "POST",
    //     body: JSON.stringify(reqBody),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    await API.post("classroom", reqBody);
    await props.history.push(`/classroom`);
  };

  return (
    <center>

    <div className="container h-100">
      <div className>
        <div className=" col-lg-12">
          <div className="d-table-cell align-middle">
            <div className="d-table-cell align-middle">
              <div className="text-center ">
                <div
                  className="card"
                  style={{
                    background: "#11101d ",
                    borderRadius: 20,
                    color: "white",
                  }}
                >                <br /><h3>Add Class</h3>

                  <br />
                  <div className="card-body">
                    <input
                      placeholder="Class Name"
                      type="text"
                      className="form-control"
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                      type="button"
                      onClick={handleSave}
                      className="btn btn-primary px-4"
                      defaultValue="Add"
                    />
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <input
                      type="button"
                      onClick={() => props.history.push(`/classroom`)}
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
    </center>

  );
}
