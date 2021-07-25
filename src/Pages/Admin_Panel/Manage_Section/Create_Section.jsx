import { useState } from "react";
import API from "../../../api";
import IN from "../../../Components/Input";
import Classes from "../../../Components/Classrooms";

export default function Create_Section(props) {
  const [name, setName] = useState("");
  const [maxStudents, setMaxstudents] = useState("");
  const [classroom_id, setClassroom_id] = useState("1");

  const handleSave = async () => {
    let reqBody = {
      name: name,
      max_students: maxStudents,
      classroom_id: classroom_id,
    };
   console.log(reqBody);
    await API.post("section", reqBody);
    await props.history.push("/section");
  };

  return (
    <div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-12">
            <div className="card" style={{background:"#11101d ",borderRadius:20,color:"white"}}>
            <br /> <br /><center> <h3> add new section</h3></center> 

                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Section</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                      placeholder="section name"
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
                                            placeholder="Max Capacity"

                        type="text"
                        className="form-control"
                        defaultValue={maxStudents}
                        onChange={(e) => setMaxstudents(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Class</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <Classes
                    
                    omar={e => setClassroom_id(e.target.value)} />
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-9 text-secondary">
                        <input
                        type="button"
                        onClick={handleSave}
                        className="btn btn-primary px-4"
                        defaultValue="Add"
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
    //         value={name}
    //         onChange={e => setName(e.target.value)}
    //         placeholder="Section name"
    //     />
    //     <br></br>

    //     <IN
    //         type="text"
    //         value={maxStudents}
    //         onChange={e => setMaxstudents(e.target.value)}
    //         placeholder="Max Students"
    //     />
    //     <br></br>

    //     <Classes mostafa={e => setClassroom_id(e.target.value)} />

    //     <button onClick={handleSave}>Save</button>
    // </div>
  );
}
