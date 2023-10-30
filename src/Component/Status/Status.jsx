import React from "react";
import "./status.css";
const Status = ({ name }) => {
  return (
    <div
      className="imageContainer relative"
      style={{ width: "30px", height: "30px" }}
    >
      <div className="status-icon">
        <span style={{background:"none"}}>{name[0]}</span>
      </div>
      <div className="showStatus"></div>
    </div>
  );
};

export default Status;
