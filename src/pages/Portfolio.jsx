import React from "react";
import { Projects } from "../components/AllComponents/Projects";
import Skills from "../components/AllComponents/Skills";
import "./style.css";
const Portfolio = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col">
                <div className="card p-5 m-2">
                  <div className="row">
                    <div className="card-title">
                      <h1 className="page-header text-white-90">
                        Projects
                      </h1>
                    </div>
                  </div>
                  <section>
                    <Projects />
                  </section>
                  <div className="row-1" style={{ marginTop: "20px" }}>
                    <div className="card-title">
                      <h1 className="page-header text-white-90">
                        Skills
                        </h1>
                    </div>
                    <section>
                      <Skills />
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
