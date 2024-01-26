import React from "react";
import "./side-bar.css";
import Offcanvas from "react-bootstrap/Offcanvas";

const SideBarComponent = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      className="sidebar-layout mx-2 p-1 d-md-none"
      responsive="lg"
      placement="bottom"
    >
      <section className="sidebar-main-container h-100 p-4">
        <div className="text-center">
          {sidebarList?.map((item, index) => (
            <button className="sidebar-list-container rounded-2 text-center w-75 mx-auto p-2 my-2">
              {item?.name}
            </button>
          ))}
        </div>       
      </section>
    </Offcanvas>
  );
};

export default SideBarComponent;

const sidebarList = [
  {
    name: "Home",
    value: "home",
  },
  {
    name: "About",
    value: "sbout",
  },
  {
    name: "Project",
    value: "project",
  },
  {
    name: "Contact",
    value: "contact",
  },
];
