import React, { Fragment } from "react";
import "./index.css";
const Spinner3 = () => {
  return (
    <div className="loader">
      <div className="orbe" style={{"--index": 0}}></div>
      <div className="orbe" style={{"--index": 1}}></div>
      <div className="orbe" style={{"--index": 2}}></div>
      <div className="orbe" style={{"--index": 3}}></div>
      <div className="orbe" style={{"--index": 4}}></div>
    </div>
  );
};
export default Spinner3;
