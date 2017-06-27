import React, {Component} from "react";

import AddBill from "./AddBill";

class Bills extends Component {
    constructor(props){
        super(props);
        this.state = {
          isVisible: false  
        };
        this.addBill = this.addBill.bind(this);
        this.listBills = this.listBills.bind(this);
        this.showBillAdd = this.showBillAdd.bind(this);
    }
    //add case for no bills when props[] == 0
    //display bill name, bill cost, and bill total
    
    //conditionally render add scene after clicking on AddBill
    //clicking button will show Addbill/cancel
    //addbill fields may be retained; to solve
    listBills(props){
        props.map((i)=>{
            return(
                <li>i</li>
            );
        });
    }

    addBill() {
        this.setState({isVisible: !this.state.isVisible});
    }

    showBillAdd() {
        console.log("showBillAdd");
        if (this.state.isVisible) {
            return(
                <AddBill isVisible={this.state.isVisible}/>
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
                        <div className="panel-title">Bills</div>
                    </div>
                    <div className="panel-body">
                        <ul>{this.listBills(["test","array"])}</ul>
                        <div className="btn-group">
                            <button onClick={this.addBill} className="btn btn-default btn-lg">Add bill</button>
                        </div>
                    </div>
                </div>
                {/*conditionally render add*/}
                {this.showBillAdd()}
            </div>
        );
    }
	

}

export default Bills;