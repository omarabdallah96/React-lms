import React from "react";

export default function Status(props) {
  const Status = ["Present","Absent","Late"];
  return (
      <div>
 <select onChange={props.omar} onClick={props.status}>
          <option disabled >Status</option>
      {Status.map((status) => (
        <option selected={props.value === status}>{status}</option>
      ))}
      </select>
      
      </div>
     
  );
}
