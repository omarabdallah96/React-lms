import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes";


export default function App(props) {
  // const [name, setname] = useState("1");



  return (
    <Router>
      {/* <button onClick= {(e) => setname(e.target.value) } value="1">logout</button> */}
      <Routes />
    </Router>
  );
}
