import React from "react";

const Contact = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
        <div className="col-lg-12">
          <div className="card p-5 m-2">
            <div className="card-title">
              <h1 className="page-header text-white-90">Contact</h1>
            </div>
            <hr />
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 justify-content-center">
                  <form action="mailto:subhashshrestha3@gmail.com" method="POST" enctype="text/plain">
                    <div className="form-group">
                      <label for="exampleInputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputMessage">Message</label>
                      <textarea
                        className="form-control"
                        id="exampleInputMessage"
                        aria-describedby="nameHelp"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-lg-4 mx-1 mt-2">
                  <h5 className="display-8">Social media & professional contact</h5>
                  <strong>Twitter: </strong>
                  <a className="text-center text-info bg-white" href="#">@shasyah_newar</a>
                  <br/>
                  <strong>Email:</strong><a className="text-center text-info bg-white" href="#">subhashshrestha3@gmail.com</a>
                  <br/>
                  <strong>Github link:</strong>
                  <a className="text-center text-info bg-white" href="https://github.com/SthaSub" target="_blank">SthaSub</a>
                  <br/>
                  <strong>Linkedin:</strong>
                  <a className="text-center text-info bg-white" target="_blank" href="https://www.linkedin.com/mynetwork/invite-connect/connections/">Subhash Shrestha</a>
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

export default Contact;
