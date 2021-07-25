import React, { useState } from "react";
import API from "../../../api";

import IN from "../../../Components/Input";
import BT from "../../../Components/Button";
import { Link } from "@material-ui/icons";

export default function Create_Admin(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = async () => {
    let reqBody = {
      fname: fname,
      lname: lname,
      username: username,
      password: password,
      phone: phone,
      email: email,
    };

    await API.post(`admin`, reqBody);
    await props.history.push(`/admin`);
  };

  return (
    <div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center "></div>
              <div
                className="card"
                style={{
                  background: "#11101d ",
                  borderRadius: 20,
                  color: "white",
                }}
              >
                <div className="card-body">
                  <center>
                    <h3>Add new admin </h3>
                  </center>

                  <div className="m-sm-4">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        name="fname"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last name</label>
                      <input
                        className="form-control form-control-lg"
                        name="fname"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        className="form-control form-control-lg"
                        name="fname"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label>phone</label>
                      <input
                        className="form-control form-control-lg"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="phone"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        name="fname"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <div
                      className="text-center mt-3"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <button
                        type="submit"
                        onClick={handleSave}
                        className="btn btn-lg btn-primary"
                      >
                        Add
                      </button>
                      &nbsp; &nbsp;
                      <button
                        type="submit"
                        className="btn btn-lg btn-danger"
                        onClick={() => props.history.push(`/admin`)}
                      >
                        cancel
                      </button>
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
