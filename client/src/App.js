import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
// Importing a few elements from react-bootstrap for design aesthetics
import {Nav} from 'react-bootstrap';

// Importing a few elements from react-router-dom to handle routing in our application
import { BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Home';

const About = () => (
  <div>
    About
  </div>
)

const Info = () => (
  <div>
    info
  </div>
)


class App extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Connectify</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item active">
                  <Nav.Link as={ Link } to="/Home">Home</Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link as={ Link } to="/About">About</Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link as={ Link } to="/Info">Info</Nav.Link>
                </li>
              </ul>
            </div>
          </nav>

            <Switch>
              <Redirect exact from="/" to="Home"/>
              <Route exact path="/Home" component={Home}/>
              <Route exact path="/About" component={About}/>
              <Route exact path="/Info" component={Info}/>
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
