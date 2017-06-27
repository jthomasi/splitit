import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

import AddRM from "./AddRM";

import {routes, Subroutes} from "../config/routes";

class Roommates extends Component {
    //add case for no roommates when props[] == 0
    // show %share of bill

    //conditionally render add scene after clicking on add roommate
    //clicking button will show add roommate /cancel
    //add roommate fields may be retained; to solve
    listRoomies(props){        
        props.map((i)=>{
            return(
                <li>i</li>
            );
        });
    }

	render(){
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title">Roommates</div>
                    </div>
                    <div className="panel-body">
                        <ul>{this.listRoomies(["test","array"])}</ul>
                        <div className="btn-group">
                            <Link to="/addrm">
                             <div className="btn btn-default btn-lg">Add roommate</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Route path="/addrm" component={AddRM}/>
            </div>
        );
    }

}

export default Roommates;