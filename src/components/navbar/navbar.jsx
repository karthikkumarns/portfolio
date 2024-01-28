import React, { useState } from "react";
import "./navbar.css";
import menu from "../../assets/icon/menu.svg";
import SideBarComponent from "../sidebar/side-bar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <nav className="nav-main-container col-xl-9 col-11 mx-auto position-sticky p-1">
        <div className="nav-sub-container finder__outer w-100 px-md-4 px-3 py-md-3 py-2 d-flex justify-content-between align-items-center">
          <div className="font-cursive fw-500 cursor_none nav-name">
            Karthik Kumar
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="d-md-none nav-menu p-1 px-2 my-1 rounded-3"
          >
            <img src={menu} height={18} alt="menu" />
          </button>
          <div className="d-none d-md-block">
            <div className="d-flex align-items-center gap-4 cursor_pointer">
              <div className="nav-text-container">Home</div>
              <div className="nav-text-container">About</div>
              <div className="nav-text-container">Projects</div>
              <div className="nav-text-container">contact</div>
            </div>
          </div>
        </div>
      </nav>

      <SideBarComponent
        show={sidebarOpen}
        handleClose={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;
