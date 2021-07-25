import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../../api";
import BloodType from "../../../Components/BloodType";
import Classrooms from "../../../Components/Classrooms";
import IN from "../../../Components/Input";
import Sections from "../../../Components/Sections_Class";
import Gender from "../../../Components/Gender";

import Selected_Blood from "../../../Components/Selected_Blood";

export default function Edit_Admin(props) {
  const [gender, setGender] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mothername, setmothername] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const [bloodtype, setbloodtype] = useState("A+");
  const [section_id, setsectionid] = useState("1");
  const [class_id, setclassid] = useState("");
  const getStudent = async (id) => {
    await API.get(`student/${id}`).then((res) => {
      const result = res.data[0];
      setFname(result.fname);
      setLname(result.lname);
      setPhone(result.phone);
      setEmail(result.email);
      setPhoto(result.photo);
      setbloodtype(result.bloodtype);
      setBirthdate(result.birthdate);
      setGender(result.gender);

      setmothername(result.mothername);
      setmiddlename(result.middlename);
      setsectionid(result.sections);
      setclassid(result.class);
      console.log(result.fname);
    });
  };

  const handleSave = async () => {
    const id = props.match.params.id;

    let reqBody = {
      fname: fname,
      lname: lname,
      middlename: middlename,
      mothername: mothername,
      phone: phone,
      email: email,
      bloodtype: bloodtype,
      birthdate: birthdate,
      gender: gender,
     section_id: section_id,
    };
    console.log(reqBody);
    await API.put(`student/${id}`, reqBody);
    await props.history.push(`/student`);
  };

  useEffect(() => {
    getStudent(props.match.params.id);
  }, []);

  return (
    <div>
      <div className="container" >
        
        <div className="main-body" >
          <div className="row">
            <div className="col-lg-4">
              <div className="card"
               style={{
                background: "#11101d ",
                borderRadius: 20,
                color: "white",
              }}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={`http://localhost:8000/storage/uploads/${photo}`}
                      alt="Admin"
                      style={{
                        borderRadius: 10,
                        maxWidth: 110,
                        maxHeight: 110,
                      }}
                    />
                    <div className="mt-3">
                      <p className="text-secondary mb-1">
                        Edit &nbsp; student &nbsp; Profile
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
                      <h6 className="mb-0">Middlename</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={middlename}
                        onChange={(e) => setmiddlename(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">mothername</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={mothername}
                        onChange={(e) => setmothername(e.target.value)}
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
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Birthdate</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="date"
                        className="form-control"
                        defaultValue={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Bloodtype</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Selected_Blood
                        value={bloodtype}
                        omar={(e) => setbloodtype(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Gender</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Gender
                        value={gender}
                        omar={(e) => setGender(e.target.value)}
                      />
                      <div className="col-sm-3"></div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Grade</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Sections 
                        value={section_id}
                        omar={(e) => setsectionid(e.currentTarget.value)}
                      />
                      {class_id} &nbsp; 
                      {section_id}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="button"
                        onClick={() => props.history.push(`/student`)}
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
