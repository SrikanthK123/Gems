import React from "react";
import GamesStore from "./components/GamesStore";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './components/style.css'

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import EducationsStore from "./components/EducationsStore";
import MoviesStore from "./components/MoviesStore";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
      <Route extra path='/moviesSession'> <MoviesStore/></Route>
        
      <Route extra path='/educationSession'><EducationsStore/></Route>
        <Route extra path='/gameSession'> <GamesStore/></Route>
        <Route extra path='/'> <Home/></Route>
        
       
     
      </Switch>
      </Router>
    </>
  );
}

export default App;
