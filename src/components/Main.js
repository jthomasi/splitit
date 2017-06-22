import React, {Component} from "react";
import Registration from "./Registration";

class Main extends Component {
    constructor(){
        super();
        this.state = {

        };
        //binds
    }
    
    // componentDidMount(){

    // }

    // componentDidUpdate(){

    // }

    render() {
        return (
        <div className="container">
            
            <div className="jumbotron">Test</div>

            <Registration />

        </div>        
        );
    }
}

export default Main;