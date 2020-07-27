import React from "react";
import Image from "./image";
import './App.css';

import {
  BrowserRouter as Router,
 Link
} from "react-router-dom";
// import People from './components/People';
export default function App() {
  return (
    <Router>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Link class="navbar-brand" href="#">Navbar</Link>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#">Link</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link disabled" href="#" tabindex="-1">Disabled</Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        </form>
      </div>
    </nav>
    
    <Image />

 
     <div class="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <button class="btn"><i class="fa fa-home btn btn-lg btn-primary"></i></button>
     </div>
    
    </Router>
  );
}