import './App.css';
import { Route } from "react-router-dom";
import React from "react";

import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";


function App() {
  return (
      <React.Fragment>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home" component={NavBar} />
          <Route exact path="/home" component={Home} />
          <Route path="/home/recipe/:id" component={RecipeDetails} />
          <Route path="/home/create" component={Form} />
      </React.Fragment>
  );
}

export default App;
