import React, {Component} from "react";
import {Link} from "react-router-dom";

class Roommates extends Component {
    //add case for no roommates when props[] == 0
    // show %share of bill
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
                            <div className="btn btn-default btn-lg">Add roommate
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Roommates;