import React from "react";
import "../styles/Button.css";

const Button = ({ children }) => {
  const btnData = [
    {
      id: "quality",
      name: "Quality",
    },
    {
      id: "performance",
      name: "Performance",
    },
  ];
  return <>{btnData.map((btn) => (
    <button className="btn" id={btn.id} key={btn.id}>{btn.name}</button>
    ))}</>
};

export default Button;
