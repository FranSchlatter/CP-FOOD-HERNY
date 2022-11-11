import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="container">
      <img className="card-img" src={props.image} alt="img"/>
      <h1 className="card-name">{props.name}</h1>
      <h3 className="card-diets">Diets: {props.diets}</h3>
    </div>
  );
}

export default Card;