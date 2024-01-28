import React from "react";
import "./header.css";

const HeaderComponent = ({title = 'title'}) => {
  return (
    <div className="header-container  position-sticky p-1 col-sm-3 col-12">
      <div className="header-container-outer px-md-4 px-3 py-2 d-flex align-items-center">
        <h6 className="m-0 font-cursive header-title w-100 text-center">{title}</h6>
      </div>
    </div>
  );
};

export default HeaderComponent;
