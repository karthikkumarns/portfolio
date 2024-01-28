import React, { useEffect, useState } from "react";
import "./projects.css";
import HeaderComponent from "../header/header-component";
import axios from "axios";

const ProjectsComponent = () => {
  const [data, setData] = useState(null);

  console.log(data);

  const postData = { search: "html course and learning sites" };

  const handlePostRequest = () => {
    const apiUrl = "https://search-engine-eq5l.onrender.com/get-links";
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log("Post request successful:", response.data);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };

  return (
    <section className="projects-main-container p-3">
      <div className="col-xl-9 col-11 mx-auto">
        <HeaderComponent title="Projects" />

        <div className="my-5">
          <p className="sub-heading font-montserrat">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>

        {/* <button onClick={handlePostRequest}>sd</button> */}

        <div className="my-5 d-flex gap-3" style={{overflowX:"auto" }}>
          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>
          <div className="card">
            <div className="card-image"></div>
            <p className="card-title">Card title</p>
            <p className="card-body">
              Nullam ac tristique nulla, at convallis quam. Integer consectetur
              mi nec magna tristique, non lobortis.
            </p>
            <p className="footer">
              Written by <span className="by-name">John Doe</span> on{" "}
              <span className="date">25/05/23</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;
