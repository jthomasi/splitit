import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Auth from '../modules/Auth';

class AddBills extends Component{
    constructor(props){
        super(props);
        this.state = {
            bills: "",
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

        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.billName);
        const cost = encodeURIComponent(Number(this.state.billCost).toFixed(2));
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

            // NEED TO RERENDER BILLS
            console.log("bill submitted");
            // change the current URL to /
            // this.context.router.replace('/');
            window.location.reload();
            //change entry fields to empty
            this.setState({billName: ""});
            this.setState({billCost: 0});
            this.setState({dueDate: ""});
        }
        });
        xhr.send(formData);
    }

    handleChange(event, date){
        console.log("bill value change");
        
        if (event != null){
            let newState = {};
            newState[event.target.id] = event.target.value;
            this.setState(newState);
        } else {
            this.setState({
                dueDate: date
            });
        }
    }

    render(){
        return(
            <Card>
                <CardTitle title="Add Bill"/>
                    <form className="form-horizontal" method="post" action="addbill">
                        {/*bill name*/}
                        <div className="form-group">
                            <div className="col-sm-2"/>
                            <div className="col-sm-8">
                                <TextField type="text"
                                value={this.state.billName}
                                onChange={this.handleChange}
                                id="billName"
                                floatingLabelText="Bill Name"
                                hintText="ex. Internet"/>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                        {/*bill cost*/}
                        <div className="form-group">
                            <div className="col-sm-2"/>
                            <div className="col-sm-8">
                                <TextField type="number"
                                value={this.state.billCost}                                        
                                onChange={this.handleChange}
                                id="billCost"
                                floatingLabelText="Bill Cost"                                
                                hintText="ex. 500"
                                min={0}
                                step="0.01"/>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                        {/*due date*/}
                        <div className="form-group">
                            <div className="col-sm-2"/>
                            <div className="col-sm-8">
                                <DatePicker
                                hintText="Due Date" 
                                value={this.state.dueDate}  
                                floatingLabelText="Due Date"                                                                      
                                onChange={this.handleChange}
                                id="dueDate"/>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                    </form>   
                <Divider/>
                <CardActions>
                    <div onClick={this.handleSubmit}>
                        <RaisedButton
                            disabled={this.state.billCost < 0
                                || !this.state.billName
                                || !this.state.dueDate}
                            label="Add"/>
                    </div>
                </CardActions>
            </Card>            
        );
    }
}

export default AddBills;