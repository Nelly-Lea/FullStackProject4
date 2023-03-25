import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Game  from './Game';
import Sign_up from './sign_up';

const Main = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Sign_up />} />
        <Route path="/game" element={<Game />} />
     </Routes>
  </Router>
  );
}
console.log("Route configuration loaded"); 
export default Main;