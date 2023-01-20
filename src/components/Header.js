import React from "react";
import logo from "../assets/baskyt.png";
import menuicon from "../assets/menu-1.png";
import search from "../assets/search.png";
import user from "../assets/user.png";

import ".././styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="logo-section">
          <img src={logo} alt="baskyt-logo" />
          <div className="hamburger">
            <img src={menuicon} alt="menu-icon" />
          </div>
        </div>
        <div className="profile-section">
          <img src={search} alt="search" />
          <div className="profile">
            <img src={user} alt="user-profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
