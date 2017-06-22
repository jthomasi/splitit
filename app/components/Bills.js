import React, {Component} from "react";
import {Link} from "react-router-dom";

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
                            <div className="btn btn-default btn-lg">Add bill
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
	

}

export default Bills;