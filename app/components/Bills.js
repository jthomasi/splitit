import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

import AddBill from "./AddBill";

import {routes, Subroutes} from "../config/routes";

class Bills extends Component {
    //add case for no bills when props[] == 0
    //display bill name, bill cost, and bill total
    listBills(props){
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
                        <div className="panel-title">Bills</div>
                    </div>
                    <div className="panel-body">
                        <ul>{this.listBills(["test","array"])}</ul>
                        <div className="btn-group">
                           <Link to="/addbill">
                            <div className="btn btn-default btn-lg">Add bill</div>
                           </Link>
                        </div>
                    </div>
                </div>
                <Route path="/addbill" component={AddBill}/>
            </div>
        );
    }
	

}

export default Bills;