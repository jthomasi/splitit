import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

import Registration from "./Registration";
import Dashboard from "./Dashboard";

import {routes, Subroutes} from "../config/routes";

class Main extends Component {
    render() {
        return (
        <div>
            <div className="btn-group">
                <Link to="/register"><button className="btn btn-default btn-lg">Create Home</button></Link>
            </div>
            
            <div className="btn-group">
                <Link to="/dashboard"><button className="btn btn-default btn-lg">Sign-in Home</button></Link>
            </div>

            <Route path="/register" component={Registration}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>      
        );
    }
}

export default Main;