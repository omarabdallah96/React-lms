import React, { useState, useEffect } from "react";

export default function Sections(props) {
  const [Sections, setSections] = useState([]);
  const [id_class, setidclass] = useState("");
  const [classrom, setclassrom] = useState([]);

  const get_section = async () => {
    const result = await fetch(
      `http://127.0.0.1:8000/api/classroom_section/${id_class}`
    );
    const data = await result.json();
    setSections(data);
  };
  const get_class = async () => {
    const result = await fetch(`http://127.0.0.1:8000/api/classroom`);
    const data = await result.json();
    setclassrom(data);
    // setidclass(data.id);
    console.log(data.id);
  };

  useEffect(() => {
    get_section();
    get_class();
  }, [id_class]);

  return (
    <>
      <div>
      <select onClick={(e) => setidclass(e.target.value)}>
          <option disabled>class room</option>
          {classrom.map((classrom) => (
            <option key={classrom.id} value={classrom.id}>
              {classrom.name}
            </option>
          ))}
        </select>
        <select onClick={props.omar} >
          <option disabled>Section</option>
          {Sections.map((Sections) => (
            <option value={Sections.id} >{Sections.name}</option>
          ))}
        </select>
        
      </div>
    </>
  );
}
