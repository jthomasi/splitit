import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//components
import Main from "./components/Main";
// import Bills from "./components/Bills";
// import Roommates from "./components/Roommates";
// import Registration from "./components/Registration";

//react router to link other pages and components
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

//use modal gallery for multiple pages
//route config? in this file

class App extends Component {
    constructor(){
      super();
      this.state = {
        homeName: "",
        homeEmail: "",
        homePW: "",
        rmName: "",
        rmEmail: "",
        billPercent: 0,
        billCost: 0,
        billName: "",
        dueDate: ""
      };
      //binds
    }

    // handleChange(event) {
      
    // }
  
    render() {
      return (
        <div className="App container">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Splitit</h2>
            <p>Splitting the rent and bills made easy(ier).</p>
          </div>

          <p className="App-intro">
            <Main />
          </p>
        </div>
      );
    }
}

export default App;
