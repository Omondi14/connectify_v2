import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Home}/>
      </div>
    );
  }
}

export default App;
