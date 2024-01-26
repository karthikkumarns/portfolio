import React, { useEffect, useState } from "react";
import "./hero.css";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.webp";
import next from "../../assets/images/next.png";
import react from "../../assets/images/React-icon.svg.png";
import menu from "../../assets/icon/menu.svg";
import SideBarComponent from "../sidebar/side-bar";

const HeroComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cssElement = document.getElementById("css");
      const htmlElement = document.getElementById("html");
      const jsElement = document.getElementById("js");
      const nextElement = document.getElementById("next");
      const reactElement = document.getElementById("react");
      const jsMobilleElement = document.getElementById("jsmob");

      if (
        cssElement &&
        htmlElement &&
        jsElement &&
        nextElement &&
        reactElement &&
        jsMobilleElement
      ) {
        const value = window.scrollY;
        cssElement.style.left = value * -1.5 + "px";
        htmlElement.style.left = value * -2 + "px";
        jsElement.style.left = (value - 80) * -2.5 + "px";
        nextElement.style.right = value * -2 + "px";
        reactElement.style.right = value * -2.5 + "px";
        jsMobilleElement.style.left = (value - 40) * -2.5 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-container position-relative">
      <div className="nav-main-container col-xl-9 col-11 mx-auto py-3 position-sticky">
        <nav className="nav-sub-container neumorphism p-md-3 p-2 px-lg-5 px-4 d-flex justify-content-between align-items-center ">
          <div className="font-cursive fw-500 cursor_none nav-name">
            Karthik Kumar N S
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
        </nav>
      </div>
      <section className="w-100 overflow-hidden h-100">
        <section className="d-flex justify-content-center align-items-center hero-container m-5 col-xl-9 mx-auto position-relative">
          <div>
            <div
              id="css"
              className="position-absolute float-animation main-float css-float d-flex justify-content-center align-items-center p-1 m-3"
            >
              <img
                src={css}
                alt="logo"
                className="logo-image-container-1 ms-1 mt-1"
              />
            </div>
            <div
              id="html"
              className="position-absolute main-float float-html-animation html-float d-flex justify-content-center align-items-center p-1 m-3"
            >
              <img
                src={html}
                alt="logo"
                className="logo-image-container-1 ms-1 mt-1"
              />
            </div>
            <div className="d-none d-md-block">
              <div
                id="js"
                className="position-absolute main-float js-float float-js-animation  d-flex justify-content-center align-items-center p-0 px-3 "
              >
                <img
                  src={js}
                  alt="logo"
                  className="logo-image-container-2 my-3"
                />
              </div>
            </div>
            <div className="d-md-none">
              <div
                id="jsmob"
                className="position-absolute main-float js-float float-js-animation  d-flex justify-content-center align-items-center p-0 px-md-3 px-2 "
              >
                <img
                  src={js}
                  alt="logo"
                  className="logo-image-container-2 my-md-3 my-2 p-1"
                />
              </div>
            </div>

            <div
              id="next"
              className="position-absolute main-float next-float float-next-animation d-flex justify-content-center align-items-center p-1 m-3"
            >
              <img
                src={next}
                alt="logo"
                className="logo-image-container-2 m-md-3 m-2"
              />
            </div>
            <div
              id="react"
              className="position-absolute main-float react-float float-react-animation d-flex justify-content-center align-items-center p-1 m-3"
            >
              <img
                src={react}
                alt="logo"
                className="logo-image-container-2 m-md-2 m-1"
              />
            </div>
          </div>
          <div className="m-3 text-center text-md-start">
            <>
              Hey , I'm <span className="font-cursive">KARTHIK KUMAR N S </span>
              <p className="hero-sub-heading font-montserrat">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
            </>
            <div className="text-center">
              <button className="hero-button px-4 py-3 mx-auto">
                Download Resume
              </button>
            </div>
          </div>
        </section>
      </section>
      <SideBarComponent
        show={sidebarOpen}
        handleClose={() => setSidebarOpen(false)}
      />
    </div>
  );
};

export default HeroComponent;
