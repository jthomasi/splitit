import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

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
            <Card>
                <CardTitle title="Add Bill"/>
                    <form className="form-horizontal" method="post" action="addbill">
                        {/*bill name*/}
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Bill Name</label>
                            <div className="col-sm-8">
                                <input type="text"
                                value={this.state.billName}
                                onChange={this.handleChange}
                                id="billName"
                                className="form-control"/>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                        {/*bill cost*/}
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Bill Cost</label>
                            <div className="col-sm-8">
                                <input type="number"
                                value={this.state.billCost}                                        
                                onChange={this.handleChange}
                                id="billCost"
                                className="form-control"/>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                        {/*due date*/}
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Due Date</label>
                            <div className="col-sm-8">
                                <input type="text" 
                                value={this.state.dueDate}                                        
                                onChange={this.handleChange}
                                id="dueDate"
                                className="form-control"/>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                    </form>   
                <Divider/>
                <CardActions>
                    <div onClick={this.handleSubmit}>
                        <FlatButton label="Add"/>
                    </div>
                </CardActions>
            </Card>            
        );
    }
}

export default AddBills;