import React, { Component } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

// css
import './App.css';

import logo from './logo.svg';


class Home extends Component {
      // constructor
      constructor(props) {
          super(props);

          // set state
          this.state = {loading: true};
      }

      componentDidMount() {
          console.log("in home.js");
          this.fetchData()

      }

      fetchData(){
        fetch(`/api/test`)
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            this.setState({
              text: data.test_str,
              loading: false
            });
        })
      }

      render() {
        const loading = this.state.loading;
        // Render a spinner icon if loading
        if (loading) {
            return (
                <div className="text-center">
                  <Spinner animation="grow" variant="warning" className="mx-auto" />
                </div>
            );
        }
        return (
          <React.Fragment>
            <div class="jumbotron bg-white text-dark">
              <div class="container">
                <h1 class="display-4">History of Education</h1>
                <h4 class="display-6">  </h4>
                <p class="lead">     </p>
                <p class="lead"> Analyze the historical relationship between teacher compensation and student performance </p>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="/Dashboard" role="button">Explore the Dashboard</a>
                </p>
              </div>
            </div>
            <div class="jumbotron bg-lightgrey text-dark">
              <div class="container">
                <h4 class="display-6">Our Goal</h4>
                <p>{this.state.text}</p>
              </div>
            </div>
          </React.Fragment>
        );
      }
  }

export default Home;
