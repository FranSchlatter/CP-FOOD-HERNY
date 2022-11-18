import React from "react";
import "./Card.css";

function Card(props) {
  let dietsDB = []
  if(!isNaN(props.id)){
    return (
      <div className="container">
        <img className="card-img" src={props.image} alt="img"/>
        <div className="order-text">
        <h2 className="card-name">{props.name}</h2>
        <h4 className="card-diets">Diets: {props.diets.join(", ")}</h4>
        <h3 className="card-hs">Health score: {props.health_score}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <img className="card-img" src={props.image} alt="img"/>
      <div className="order-text">
      <h2 className="card-name">{props.name}</h2>
      { 
        props.diets && props.diets.map(e => { dietsDB.push(e.name) })
      }
      <h4 className="card-diets">Diets: {dietsDB.join(", ")}</h4>
      <h3 className="card-hs">Health score: {props.health_score}</h3>
      </div>
    </div>
  );
  
}

export default Card;