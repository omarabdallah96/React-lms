import React from "react";

export default function Selected_Blood(props) {
  const bloodTypes = ["A+","A-" ,"B+","B-", "O+","O-","AB+","AB-"];
  return (
      <select onChange={props.omar}>
          <option disabled >Blood Type</option>
      {bloodTypes.map((blood) => (
        <option selected={props.value === blood}>{blood}</option>
      ))}
      </select>
      
  );
}
