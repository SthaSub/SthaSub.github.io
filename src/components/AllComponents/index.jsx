import React from "react";

export const Img = (props) => {
  return (
    <div>
      <img {...props} />
    </div>
  );
};

export const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputName">{props.name}:</label>  
       <input className="form-control" {...props} />
    </div>
  );
};

export const TextArea = (props) => (
  <div className="form-group">
    <label htmlFor="exampleInputName">{props.name}</label> 
    <textarea className="form-control" {...props} />
  </div>
);

export const FormBtn = (props) => (
  <button
    {...props}
    style={{ float: "right", marginBottom: 10 }}
    className="btn btn-success"
  >
    {props.children}
  </button>
);

export const About = (props) => {
  return (
    <p {...props}>
      Hi, I'm Subhash Shrestha.
      <br />
      <br />
      Explorer, Cooking with love, Foodie, Enthusiastic programmer. I enjoy time
      spending with computer, this is the reason why I am inclined to learn
      programming deeply. Completed the journey of to became a Full Stack
      Developer, however, I am still on flourishing my knowledge about usage
      modern web development tools, development process, learning programming
      languages usefulness. And set goal to achieve of writing reliable and
      effective quality code. When I'm not with my computer, at that moment I
      find myself cracking jokes with my friends.
    </p>
  );
};
