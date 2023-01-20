import React from "react";
import "../styles/TopSource.css";
import christina from "../assets/christina.png";
import alex from "../assets/alex.png";
import mirchi from "../assets/mirchi.png";

const TopSource = () => {
  const TopSourceData = [
    {
      id: 1,
      tag: "Top Customer",
      img: christina,
      name: "Christina Ambrosia",
      revPerMonth: "Revenue / Month",
      revenue: "$ 13469.80",
      percentUp: 12,
      totalRevenue: "$ 49137",
      orderPerMonth: "processed order / month",
      orders: 182,
      percentDown: 8,
    },
    {
      id: 2,
      tag: "Top Rider",
      img: alex,
      name: "Alex Williams",
      revPerMonth: "Average Rating",
      revenue: "$ 13469.80",
      percentUp: 12,
      totalRevenue: "$ 49137",
      orderPerMonth: "processed orders",
      orders: 182,
      percentDown: 8,
    },
    {
      id: 3,
      tag: "Top Rider",
      img: mirchi,
      name: "Desi Accent",
      revPerMonth: "Revenue / Month",
      revenue: "$ 13469.80",
      percentUp: 12,
      totalRevenue: "$ 49137",
      orderPerMonth: "processed order / month",
      orders: 182,
      percentDown: 8,
    },
  ];
  return (
    <>
      {TopSourceData.map((cust) => (
        <div className="top-class" key={cust.id}>
          <div className="top-left">

            <div className="left-inner">
              <img src={cust.img} alt={cust.id} className="top-img" />
              <p className="top-name">{cust.name}</p>
            </div>
            <p className="revMonth">{cust.revPerMonth}</p>
            <p>
              <span className="revenue">{cust.revenue}</span>
              <span className="percentUp">{cust.percentUp} %</span>
            </p>
          </div>
          <div className="top-right">
            <p className="totalRevenue">{cust.totalRevenue}</p>
            <p className="orders-month">{cust.orderPerMonth}</p>
            <p>
              <span className="orders">{cust.orders}</span>
              <span className="percentDown">{cust.percentDown} %</span>
            </p>
          </div>
          <div className="tag">{cust.tag}</div>
        </div>
      ))}
    </>
  );
};

export default TopSource;
