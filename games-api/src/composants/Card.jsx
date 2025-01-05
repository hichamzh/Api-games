import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <>
      <div className="card bg-base-100 w-[353px] shadow-xl">
        <figure>
          <img
            src={props.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.content}</p>
          <div className="card-actions justify-between items-center">
          <div className="badge badge-outline badge-accent">{props.genre}</div>
            <Link to={props.link} target="_blank">
            <button className="btn btn-primary">Voir</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
