import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import Input from "../../../Components/Input";

export default function Edit_Classroom(props) {
  const [name, setName] = useState("");

  const getClassroom = async (id) => {
    await API.get(`classroom/${id}`).then((res) => {
      const result = res.data;
      setName(result.name);
    });
  };

  const handleSave = async () => {
    const id = props.match.params.id;

    let reqBody = {
      name: name,
    };

    await API.put(`classroom/${id}`, reqBody);
    await props.history.push(`/classroom`);
  };
  // await fetch(`http://127.0.0.1:8000/api/classroom/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(reqBody),
  //     headers: {
  //         'Content-Type': 'application/json'
  //     }
  // });

  useEffect(() => {
    getClassroom(props.match.params.id);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="main-body">
          
          <div className="row">
            <div className="col-lg-12">
              <div className="card" style={{background:"#11101d ",borderRadius:20,color:"white"}}>
                <div className="card-body">
                 <center><h3>edit class room</h3></center> 
                 <br />
                 <br />
                 <br />

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
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
    </div>
  );
}
