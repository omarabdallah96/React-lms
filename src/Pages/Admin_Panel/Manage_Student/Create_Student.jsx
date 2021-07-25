import axios from "axios";
import React, { useState } from "react";
import Selected_Blood from "../../../Components/Selected_Blood";
import Gender from "../../../Components/Gender";
import Sections from "../../../Components/Sections_Class";
function Create_student(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [mothername, setMothername] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Male");
  const [bloodtype, setBloodtype] = useState("A+");
  const [section_id, setsectionid] = useState("");
  const [classroom_id, setClassroom_id] = useState("");
  const handleSubmit = async (event) => {
    console.log(gender);
    console.log(bloodtype);
    console.log(section_id);

    event.preventDefault();
    const fileInput = document.querySelector("#photo");
    const formData = new FormData();
    formData.append("photo", fileInput.files[0]);
    formData.append("fname", fname);
    formData.append("lname", lname);

    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("middlename", middlename);
    formData.append("mothername", mothername);
    formData.append("gender", gender);
    formData.append("birthdate", birthdate);
    formData.append("section_id", section_id);
    formData.append("bloodtype", bloodtype);

    await axios.post("http://127.0.0.1:8000/api/student", formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });
    await props.history.push(`/student/`);
  };

  return (
    <div className="">
      <form
        method=""
        id="upload-image"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="container">
          <div className="main-body">
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
                      <img src="https://img.icons8.com/dotty/80/ffffff/person-male.png" />

                      <div className="mt-3">
                        <p className="text-secondary mb-1">
                          Create &nbsp; student &nbsp; Profile
                        </p>
                        <p className="text-muted font-size-sm"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div
                  className="card"
                  style={{
                    background: "#11101d ",
                    borderRadius: 20,
                    color: "white",
                  }}
                >
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Fisrt name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          placeholder="First Name"
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
                          placeholder="Last Name"
                          type="text"
                          className="form-control"
                          defaultValue={lname}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Father Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          placeholder="Father Name"
                          type="text"
                          className="form-control"
                          defaultValue={middlename}
                          onChange={(e) => setMiddlename(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">mothername</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          placeholder="Mother Name"
                          type="text"
                          className="form-control"
                          defaultValue={mothername}
                          onChange={(e) => setMothername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                            placeholder="Phone Number"

                          type="text"
                          className="form-control"
                          defaultValue={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Date Of Birth</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="date"
                          className="form-control"
                          value={birthdate}
                          onChange={(e) => setBirthdate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                        placeholder="Email"
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          omar={(e) => setBloodtype(e.target.value)}
                        />
                        <div className="col-sm-3"></div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Gender</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Gender
                          value={gender}
                          gender={(e) => setGender(e.target.value)}
                        />
                        <div className="col-sm-3"></div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Class</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <Sections
                          value={section_id}
                          omar={(e) => setsectionid(e.currentTarget.value)}
                        />
                        <div className="col-sm-3"></div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Photo</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {/* <input
                          placeholder="ok"
                          type="file"
                          name="photo"
                          required
                        /> */}
                        <label class="form-label" for="customFile">
                          student photo
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          id="photo"
                          required
                        />
                        <div className="col-sm-3"></div>
                      </div>
                    </div>

                    {/* <button type="submit" id="btnUploadFile">
                      register
                    </button> */}
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
                          type="submit"
                          value="create student"
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
      </form>
    </div>
  );
}

export default Create_student;
