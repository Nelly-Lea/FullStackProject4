//import React from 'react';
//import '../styles.css'

import React, {Component} from 'react';
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
class Main extends Component {
  
  render() { 
    return ( <Sign_up  />);
  }
}
 
export default Main;
// const Main = () => {
//   return (
//     <Sign_up className='salut'/>
//   //   <Router>
//   //     <Routes>
//   //     <Route exact path="/" element={<Sign_up className='sign_up_background'/>} />
//   //       <Route path="/game" element={<Game />} />
//   //    </Routes>
//   // </Router>
//   );
// }
console.log("Route configuration loaded"); 
//export default Main;