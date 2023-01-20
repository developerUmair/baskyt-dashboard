import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import '.././styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-body">
        <SideMenu />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
