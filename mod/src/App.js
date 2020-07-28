import React from "react";
import Image from "./image";
import Fstprofile from './FirstProfile';
import Second from './second';
import Bookmark from './bookmark';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 Link
} from "react-router-dom";
// import People from './components/People';
export default function App() {
  return (
    <Router>
      
      
      <div class = "fixNav">
        
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      
      <Link class="navbar-brand" to="/bookmark">
        bookmarks
      <img src ={require('./photos/flake.png')} alt = ""/>
      </Link>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
          </li>
          <li class="nav-item">

            <Link class="nav-link" href="" to="/second" >
              sandra
            <img src ={require('./photos/mic.png')} alt = ""/>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/FirstProfile" tabindex="-1">
            araceli
            <img src ={require('./photos/sun.png')} alt = ""/>

            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        </form>
      </div>
      <img src ={require('./photos/logo.png')} alt = ""  />
      </nav>
      </div>
      

      <Switch>
          <Route path="/image">
            <Image />
          </Route>
          <Route path="/FirstProfile">
            <Fstprofile />
          </Route>
          <Route path="/second">
            <Second />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>

    </Switch>
    
    </div>



    
   
 
     <div class="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Link class="nav-link" to="/Image" tabindex="-1">
      <button class="btn"><i class="fa fa-home btn btn-lg btn-primary"></i></button>
      </Link>
     </div>
    
    </Router>
  );
}