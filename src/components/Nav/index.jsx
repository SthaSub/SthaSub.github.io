import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Style.css";
const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Link className="navbar-brand " to="/">
                  Subhash
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                      <Link
                        to="/"
                        className={
                          location.pathname === "/"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/portfolio"
                        className={
                          location.pathname === "/portfolio"
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        className={
                          location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                        <a href={`${process.env.PUBLIC_URL}/files/subhash_resume.pdf`} download="resume" className="nav-link">Resume</a>
                    </li>    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
