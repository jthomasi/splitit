import React, {Component} from "react";

import AddRM from "./AddRM";

class Roommates extends Component {
    constructor(props){
        super(props);
        this.state = {
          isVisible: false  
        };
        this.addRoomies = this.addRoomies.bind(this);
        this.listRoomies = this.listRoomies.bind(this);
        this.showAddRM = this.showAddRM.bind(this);
    }
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

    addRoomies() {
        this.setState({isVisible: !this.state.isVisible});
    }

    showAddRM() {
        console.log("showAddRM");
        if (this.state.isVisible) {
            return(
                <AddRM isVisible={this.state.isVisible}/>
            );
        } else {
            console.log("no render");
            return null;
        }
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
                             <button onClick={this.addRoomies} className="btn btn-default btn-lg">Add roommate</button>
                        </div>
                    </div>
                </div>
                {/*conditionally render add*/}
                {this.showAddRM()}
            </div>
        );
    }

}

export default Roommates;