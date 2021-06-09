import React from "react";
import { Img } from ".";

export const Card = ({source, live, name, summary,image}) => {
  return (
    <div className="card" style={{width:"18 rem"}}>
      <Img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
            {summary}
        </p>
      </div>
      <div className="card-body">
        <a href={source} className="card-link" target="_blank">
          Source
        </a>
        <a href={live} className="card-link" target="_blank">
          Live
        </a>
      </div>
    </div>
  );
};
