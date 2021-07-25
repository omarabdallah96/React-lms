import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import IN from "../../../Components/Input";

export default function Edit_Admin(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const getAdmin = async (id) => {
    await API.get(`admin_edit/${id}`).then((res) => {
      const result = res.data;
      setFname(result.fname);
      setLname(result.lname);
      setPhone(result.phone);
      setEmail(result.email);

      setUsername(result.username);
      setPassword(result.password);
    });
  };

  const handleSave = async () => {
    const id = props.match.params.id;

    let reqBody = {
      fname: fname,
      lname: lname,
      username: username,
      password: password,
      phone: phone,
      email: email,
    };

    await API.put(`admin/${id}`, reqBody);
    await props.history.push(`/admin/`);
  };

  useEffect(() => {
    getAdmin(props.match.params.id);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card"
              style={{
                background: "#11101d ",
                borderRadius: 20,
                color: "white",}}
              >
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    {/* <img src={`http://localhost:8000/storage/uploads/${student.photo}`} /> */}

                    {/* <img src={`http://localhost:8000/storage/uploads/${student.photo}`}  alt="Admin" className="rounded-circle p-1 bg-primary" width={110} /> */}
                    <div className="mt-3">
                      {/* <h4>{student.fname} {student.lname}</h4> */}
                      <p className="text-secondary mb-1">
                        Edit  admin 
                        Profile
                      </p>
                      <p className="text-muted font-size-sm"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card"
               style={{
                background: "#11101d ",
                borderRadius: 20,
                color: "white",}}>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Fisrt name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={lname}
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Username</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="email"
                        className="form-control"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="button"
                        onClick={() => props.history.push(`/admin/`)}
                        className="btn btn-danger px-4"
                        defaultValue="Cancel"
                      />
                      &nbsp;
                      <input
                        type="button"
                        onClick={handleSave}
                        className="btn btn-primary px-4"
                        defaultValue="Save Changes"
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
