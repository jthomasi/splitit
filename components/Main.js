import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Registration from "./Registration";
import Dashboard from "./Dashboard";

class Main extends Component {
    //handle logins and registration
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    //change login status
    handleLogin(event){
        event.preventDefault();
        //if authentication is true; to do later
        this.setState({isLoggedIn: true});
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        console.log(`isLoggedIn = {isLoggedIn}`);

        return (
            <Router>
                <div className="container">
                    <div className="jumbotron">
                        <h2>Splitit</h2>
                        <p>Splitting the rent and bills made easy(ier).</p>
                    </div>

                    <div className="btn-group">
                        <Link to="/register"><button className="btn btn-default btn-lg">Create Home</button></Link>
                    </div>
                    
                    <div className="btn-group">
                        <Link to="/dashboard"><button className="btn btn-default btn-lg">Sign-in Home</button></Link>
                    </div>

                    {/*original routing*/}
                    {/*<Route path="/register" component={Registration}/>
                    <Route path="/dashboard" component={Dashboard}/>*/}

                    {/*trying to pass props to children*/}
                    {/*see https://reacttraining.com/react-router/web/api/Route/render-func*/}
                    <Route path="/register" render={()=>
                        <Registration isLoggedIn={isLoggedIn}/>
                    }/>
                    <Route path="/dashboard" render={()=>
                        <Dashboard isLoggedIn={isLoggedIn}/>
                    }/>
                </div>
            </Router>      
        );
    }
}

export default Main;