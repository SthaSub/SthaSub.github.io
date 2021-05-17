import React from "react";
const Home = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-12">
                <div className="card p-5 m-2">
                  <div className="card-title">
                    <h1 className="page-header text-white-90">About Me</h1>
                  </div>
                  <hr />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/Avatar.PNG`}
                          alt="Placeholder"
                          className="img-thumbnail"
                        />
                      </div>
                      <div className="col-lg-9">
                        <p className="lead">
                          Hi, I'm Subhash Shrestha.
                          <br />
                          <br />
                          Explorer, Cooking with love, Foodie, Enthusiastic
                          programmer. I enjoy time spending with computer, this
                          is the reason why I am inclined to learn programming
                          deeply. Currently, I am on the journey of to became a Full
                          Stack Developer, flourishing my knowledge about usage
                          modern web development tools, development process,
                          learning programming languages usefulness. And set
                          goal to achieve of writing reliable and effective
                          quality code. When I'm not with my computer, at that
                          moment I find myself cracking jokes with my friends.
                        </p>
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

export default Home;
