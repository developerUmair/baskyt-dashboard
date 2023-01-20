import React from "react";
import "../styles/CompanyInsight.css";

import insImg1 from "../assets/ins-1.PNG";
import insImg2 from "../assets/ins-2.PNG";
import insImg3 from "../assets/ins-3.PNG";
import insImg4 from "../assets/ins-4.PNG";
import insImg5 from "../assets/ins-5.PNG";

const insightData = [
  {
    id: 1,
    img: insImg1,
    title: "Order Acceptance",
    totalPercent: "85%",
    percent: "8%",
    btnText: "Phase 1 Goal",
    bgColor: "#FF9500",
    color: '#FF134A'
  },

  {
    id: 2,
    img: insImg2,
    title: "Reaching Vendor",
    totalPercent: "95%",
    percent: "8%",
    btnText: "Phase 2 Goal",
    bgColor: "#F9C210",
    color: '#59D776'
  },

  {
    id: 3,
    img: insImg3,
    title: "Delivery Order",
    totalPercent: "99%",
    percent: "8%",
    btnText: "Unlimited Goal",
    bgColor: "#82F89D",
    color: '#59D776'
  },

  {
    id: 4,
    img: insImg4,
    title: "Clearing Payments",
    totalPercent: "65%",
    percent: "8%",
    btnText: "None",
    bgColor: "#D4242A",
    color: '#FF134A'
  },

  {
    id: 5,
    img: insImg5,
    title: "Total Quality Score",
    totalPercent: "85%",
    percent: "8%",
    btnText: "Phase 1 Goal",
    bgColor: "#FCAF3C",
    color: '#FF134A'
  },
];

const CompanyInsights = () => {
  return (
    <div className="insight-section">
      {insightData.map((insight) => (
        <div className="insight" key={insight.id}>
          <img src={insight.img} alt="img" className="ins-img" />
          <p className="ins-title">{insight.title}</p>
          <p>
            <span className="total-per">{insight.totalPercent}</span>{" "}
            <span className="percent" style={{color: `${insight.color}`}}>{insight.percent}</span>
          </p>
          <button
            className="ins-btn"
            style={{ background: `${insight.bgColor}` }}
          >
            {insight.btnText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CompanyInsights;
