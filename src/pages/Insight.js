import React from "react";
import Button from "../components/Button";
import "../styles/Insight.css";
import pin from "../assets/pin-2.png";
import CompanyInsights from "../components/CompanyInsights";
import Calender from "../components/Calender";

const Insight = () => {
  return (
    <div className="insight-wrapper">
      <div className="button-wrapper">
        <div></div>
        <div>
          <Button />
        </div>
        <div id="pin">
          <img src={pin} alt="pin" />
        </div>
      </div>
      <Calender />
      <p className="company">Company Insights</p>
      <CompanyInsights />
    </div>
  );
};

export default Insight;
