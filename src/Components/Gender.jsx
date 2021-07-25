import React from "react";

export default function Genders(props) {
  const Genders = ["Male","Female"];
  return (
      <select onChange={props.omar}>
          <option disabled >Genders</option>
      {Genders.map((gender) => (
        <option selected={props.value === gender}>{gender}</option>
      ))}
      </select>
      
  );
}
