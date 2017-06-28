import React, { Component } from 'react';

//components
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";

import Registration from "./components/Registration";//TEST
import Bills from "./components/Bills"; //TEST
import Roommates from "./components/Roommates"; //TEST
import AddBill from "./components/AddBill";//TEST
import AddRM from "./components/AddRM";//TEST
import Login from "./components/Login"; //test

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
    render() {
      return (
        <Router>
          <div className="container">
            <div className="jumbotron">
              <h2>Splitit</h2>
              <p>Splitting the rent and bills made easy(ier).</p>
            </div>

            <p className="App-intro">
              {/*test area*/}
              <Main />
              {/*<Login/>*/}
            </p>
          </div>
        </Router>
      );
    }
}

export default App;
