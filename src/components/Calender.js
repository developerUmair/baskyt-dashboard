import React from "react";
import "../styles/Calender.css";

const Calender = () => {
  return (
    <div className="calender-wrapper">
      <input type="date" id="date" required/>
      <input type="search" placeholder="Search Vendor / Rider" id="search" />
    </div>
  );
};

export default Calender;
