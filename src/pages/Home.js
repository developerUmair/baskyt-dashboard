import React from "react";
import TopSource from "../components/TopSource";
import TqmCustomer from "../components/TqmCustomer";
import ActiveOrder from "../components/ActiveOrder";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="filter-wrapper">
        <div className="filter">Filter By</div>
        <Link to="/insight">
          <div className="tqm-btn">
            <button>TQM</button>
          </div>
        </Link>
      </div>

      <div className="section-2">
        <div className="left">
          <TqmCustomer />
        </div>
        <div className="right"></div>
      </div>
      <div className="section-3">
        <TopSource />
      </div>
      <div className="section-4">
        <ActiveOrder />
      </div>
    </div>
  );
};

export default Home;
