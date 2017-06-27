import React, {Component} from "react";

class AddBills extends Component{
    constructor(props){
        super(props);
        this.state = {
            billName: "",
            billCost: 0,
            dueDate: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("bill submitted");

        // send data to Bills component and database
        // this.props.updateBill(this.state.billName, this.state.billCost, this.state.dueDate);  
    }

    handleChange(event){
        console.log("bill value change");

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render(){
        return(
            <div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">Add Bill</div>
                        </div>
                        <div className="panel-body">
                            <form className="form-horizontal" method="post" action="addbill">
                                {/*bill name*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Bill Name</label>
                                    <div className="col-sm-8">
                                        <input type="text"
                                        value={this.state.billName}
                                        onChange={this.handleChange}
                                        id="billName"
                                        className="form-control"/>
                                    </div>
                                </div>
                                {/*bill cost*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Bill Cost</label>
                                    <div className="col-sm-8">
                                        <input type="number"
                                        value={this.state.billCost}                                        
                                        onChange={this.handleChange}
                                        id="billCost"
                                        className="form-control"/>
                                    </div>
                                </div>
                                {/*due date*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Due Date</label>
                                    <div className="col-sm-8">
                                        <input type="text" 
                                        value={this.state.dueDate}                                        
                                        onChange={this.handleChange}
                                        id="dueDate"
                                        className="form-control"/>
                                    </div>
                                </div>
                            </form>
                            <div className="btn-group">
                                <div className="btn btn-default btn-lg">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBills;