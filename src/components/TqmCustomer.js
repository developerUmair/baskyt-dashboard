import React from "react";
import '../styles/TqmCustomer.css'

import people from "../assets/peopl.PNG";
import order from "../assets/order.PNG";
import car from "../assets/car.PNG";
import user from "../assets/users.PNG";
import revenue from "../assets/revenue.PNG";
import rating from "../assets/rating.PNG";

const TqmCustomer = () => {
  const customerData = [
    {
      id: 1,
      img: people,
      name: "customers",
      price: 7340,
    },
    {
      id: 2,
      img: order,
      name: "orders",
      price: 12907,
    },
    {
      id: 3,
      img: car,
      name: "delivery",
      price: 12907,
    },
    {
      id: 4,
      img: user,
      name: "users",
      price: 12907,
    },
    {
      id: 5,
      img: revenue,
      name: "revenue",
      price: "$ 7304",
    },
    {
      id: 6,
      img: rating,
      name: "avg.rating",
      price: 4.0,
    },
    {
      id: 7,
      img: revenue,
      name: "avg.revenue per customer",
      price: "$ 12907",
    },
    {
      id: 8,
      img: revenue,
      name: "avg.revenue per user",
      price: "$ 12907",
    },
  ];
  return (
    <>
      {customerData.map((data) => (
        <div className="custom-card" key={data.id}>
          <img src={data.img} alt="card" className="card-img" />
          <p className="custom-text">{data.name}</p>
          <p className="custom-price">{data.price}</p>
        </div>
      ))}
    </>
  );
};

export default TqmCustomer;
