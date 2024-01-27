import React, { useEffect } from "react";
import "./hero.css";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.webp";
import next from "../../assets/images/next.png";
import react from "../../assets/images/React-icon.svg.png";

const HeroComponent = () => {
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
      <section className="w-100 overflow-hidden hero-main-container">
        <section className="d-flex justify-content-center align-items-center hero-container col-xl-9 mx-auto position-relative h-100">
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
          <div className="m-3 text-center ">
            <>
              Hey , I'm <span className="font-cursive">KARTHIK KUMAR</span>
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
 
  );
};

export default HeroComponent;
