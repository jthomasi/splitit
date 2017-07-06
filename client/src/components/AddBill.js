import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Auth from '../modules/Auth';

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

        // send data to Bills component and database
        // this.props.updateBill(this.state.billName, this.state.billCost, this.state.dueDate);

        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.billName);
        const cost = encodeURIComponent(this.state.billCost);
        const due = encodeURIComponent(this.state.dueDate);
        const homeemail = encodeURIComponent(Auth.grabEmail());
        const formData = `name=${name}&cost=${cost}&due=${due}&homeemail=${homeemail}`;

        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/addbill');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // success

            // NEED TO RERENDER BILLS and clear text boxes 
            console.log("bill submitted");
            // change the current URL to /
            // this.context.router.replace('/');
        }
        });
        xhr.send(formData);
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
                            <label className="col-sm-3 control-label">Bill Name</label>
                            <div className="col-sm-8">
                                <input type="text"
                                value={this.state.billName}
                                onChange={this.handleChange}
                                id="billName"
                                className="form-control"/>
                            </div>
                            <div className="col-sm-1"/>
                        </div>
                        {/*bill cost*/}
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Bill Cost</label>
                            <div className="col-sm-8">
                                <input type="number"
                                value={this.state.billCost}                                        
                                onChange={this.handleChange}
                                id="billCost"
                                className="form-control"/>
                            </div>
                            <div className="col-sm-1"/>
                        </div>
                        {/*due date*/}
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Due Date</label>
                            <div className="col-sm-8">
                                <input type="text" 
                                value={this.state.dueDate}                                        
                                onChange={this.handleChange}
                                id="dueDate"
                                className="form-control"/>
                            </div>
                            <div className="col-sm-1"/>
                        </div>
                    </form>   
                <Divider/>
                <CardActions>
                    <div onClick={this.handleSubmit}>
                        <RaisedButton label="Add"/>
                    </div>
                </CardActions>
            </Card>            
        );
    }
}

export default AddBills;