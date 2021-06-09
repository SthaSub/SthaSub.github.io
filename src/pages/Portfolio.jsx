import React from "react";

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
                      <h1 className="page-header text-white-90 mx-3">
                        Projects
                      </h1>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body">
                    <div className="row">
                      <h2>Visualiser</h2>
                      <div>
                        <img src="/images/visualise-dashboard.PNG" className="project" />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            View:
                            <a
                              href="https://health-visualiser.herokuapp.com/"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Visualiser
                            </a>
                          </h3>
                        </div>
                        <div className="col">
                          <h3>
                            Source:
                            <a
                              href="https://github.com/sthasub/Visualiser"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Visualiser
                            </a>
                          </h3>
                        </div>
                      </div>
                      
                    </div>

                    <div className="row">
                      <h2>Tech Blog</h2>
                      <div>
                        <img src="/images/tech-blog.PNG" className="project" />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            View:
                            <a
                              href="https://github.com/SthaSub/Tech-Blog"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Tech Blog
                            </a>
                          </h3>
                        </div>
                        <div className="col">
                          <h3>
                            Source:
                            <a
                              href="https://techblogging.herokuapp.com/"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Tech Blog
                            </a>
                          </h3>
                        </div>
                      </div>
                      
                    </div>

                    <hr />
                    <div className="row">
                      <h2>Team Profile</h2>
                      <div>
                        <img
                          src="./images/team-profile.PNG"
                          className="project"
                        />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            View:
                            <a
                              href="https://vimeo.com/515954460"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Team Profile
                            </a>
                          </h3>
                        </div>
                        <div className="col">
                          <h3>
                            Source:
                            <a
                              href="https://github.com/SthaSub/team-profile-generator.git"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Team Profile
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <h2>Weather</h2>
                      <div>
                        <img src="./images/weather.PNG" className="project" />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            View:
                            <a
                              href="https://sthasub.github.io/weather-report/"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Weather
                            </a>
                          </h3>
                        </div>
                        <div className="col">
                          <h3>
                            Source:
                            <a
                              href="https://github.com/SthaSub/weather-report"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Weather
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <h2>Quiz Challenge</h2>
                      <div>
                        <img src="./images/dashboard.PNG" className="project" />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            View:
                            <a
                              href="https://sthasub.github.io/Employee-Directory/"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              User Directory
                            </a>
                          </h3>
                        </div>
                        <div className="col">
                          <h3>
                            Source:
                            <a
                              href="https://github.com/SthaSub/Employee-Directory"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              User Directory
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <h2>Quiz Challenge</h2>
                      <div>
                        <img src="./images/code-quiz.PNG" className="project" />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            View:
                            <a
                              href="https://sthasub.github.io/code-quiz/quiz.html"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Quiz-App
                            </a>
                          </h3>
                        </div>

                        <div className="col">
                          <h3>
                            Source:
                            <a
                              href="https://github.com/SthaSub/code-quiz.git"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              Quiz-App
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <h2>CodeNoob</h2>
                      <div>
                        <img src="./images/codeNoob.PNG" className="project" />
                      </div>
                      <div className="row">
                        <div className="col">
                          <h3>
                            {" "}
                            View:
                            <a
                              href="https://code-noob.herokuapp.com/"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              CodeNoob
                            </a>
                          </h3>
                        </div>

                        <div className="col">
                          <h3>
                            {" "}
                            Source:
                            <a
                              href="https://github.com/bencyna/codeNoob.git"
                              className="bg-white text-info ml-2"
                              target="_blank"
                            >
                              CodeNoob
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row-1">
                    <div className="card-title">
                      <h1 className="page-header text-white-90">Skills</h1>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-4">
                          <img
                            src="/images/git.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/css.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/js.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-lg-4">
                          <img
                            src="./images/mysql.jpg"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/sequelize.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/ubuntu_350.jpg"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>

                        <div className="col-lg-4">
                          <img
                            src="./images/express.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/node.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/mongoose.png"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/mongodb.PNG"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/hadoop.jpg"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-4">
                          <img
                            src="./images/java.PNG"
                            alt="Placeholder"
                            className="img-thumbnail"
                          />
                        </div>
                      </div>
                    </div>
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
