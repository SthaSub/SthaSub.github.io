import React from "react";

const Contact = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
          <div class="row">
        <div class="col-lg-12">
          <div class="card p-5 m-2">
            <div class="card-title">
              <h1 class="page-header text-white-90">Contact</h1>
            </div>
            <hr />
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 justify-content-center">
                  <form action="mailto:subhashshrestha3@gmail.com" method="POST" enctype="text/plain">
                    <div class="form-group">
                      <label for="exampleInputName">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputMessage">Message</label>
                      <textarea
                        class="form-control"
                        id="exampleInputMessage"
                        aria-describedby="nameHelp"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div class="col-lg-4 mx-1 mt-2">
                  <h5 class="display-8">Social media & professional contact</h5>
                  <strong>Twitter: </strong>
                  <a class="text-center text-info bg-white" href="#">@shasyah_newar</a>
                  <br/>
                  <strong>Email:</strong><a class="text-center text-info bg-white" href="#">subhashshrestha3@gmail.com</a>
                  <br/>
                  <strong>Github link:</strong>
                  <a class="text-center text-info bg-white" href="https://github.com/SthaSub" target="_blank">SthaSub</a>
                  <br/>
                  <strong>Linkedin:</strong>
                  <a class="text-center text-info bg-white" target="_blank" href="https://www.linkedin.com/mynetwork/invite-connect/connections/">Subhash Shrestha</a>
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
