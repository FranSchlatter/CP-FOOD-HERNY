import React from "react";
import "./Card.css";



function Card(props) {
  let dietsDB = []
  if(!isNaN(props.id)){
    return (
      <div className="container">
        <img className="card-img" src={props.image} alt="img"/>
        <h1 className="card-name">{props.name}</h1>
        <h3 className="card-diets">Diets: {props.diets}</h3>
        <h3 className="card-diets">HS: {props.health_score}</h3>
      </div>
    );
  }
  return (
    <div className="container">
      <img className="card-img" src={props.image} alt="img"/>
      <h1 className="card-name">{props.name}</h1>
      { 
        props.diets && props.diets.map(e => { dietsDB.push(e.name) })
      }
      <h3 className="card-diets">Diets: {dietsDB}</h3>
      <h3 className="card-diets">HS: {props.health_score}</h3>
    </div>
  );
  
}

export default Card;