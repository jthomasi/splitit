import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Auth from '../modules/Auth';

class AddRM extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            percentage: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleSubmit(event){
        event.preventDefault();

        // send data to Roommates component and database
        // this.props.updateRoommate(this.state.roomName, this.state.roomEmail, this.state.billPercent);

        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.roomName);
        const email = encodeURIComponent(this.state.roomEmail);
        const percentage = encodeURIComponent(this.state.billPercent);
<<<<<<< HEAD
        const homeemail = encodeURIComponent(Auth.grabEmail());
=======
        const homeemail = encodeURIComponent("test@test.com");
>>>>>>> 72f37d4c1ec4667d3efa7972ad04a28a4e1258d2
        const formData = `name=${name}&email=${email}&percentage=${percentage}&homeemail=${homeemail}`;

        console.log("pre-addrm email: "+homeemail);

        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/addrm');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // success

            // NEED TO RERENDER ROOMMATES and clear the text boxes
            console.log("roommate submitted");
            // change the current URL to /
            // this.context.router.replace('/');
        } else {
            // failure
        }
        });
        xhr.send(formData);
    }

    handleChange(event){
        console.log("roommate value change");

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render(){
        //add text field fanciness
        return(
            <Card>
                <CardTitle title="Add Roommate"/>

                <form className="form-horizontal" method="post" action="/addroommate">
                    {/*name*/}
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" 
                            value={this.state.roomName}                                        
                            onChange={this.handleChange}
                            id="roomName"
                            className="form-control"/>
                        </div>
                        <div className="col-sm-1"/>
                    </div>
                    {/*email*/}
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email" 
                            value={this.state.roomEmail}                                        
                            onChange={this.handleChange}
                            id="roomEmail"
                            className="form-control"/>
                        </div>
                        <div className="col-sm-1"/>
                    </div>
                    {/*bill percent*/}
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Bill %</label>
                        <div className="col-sm-8">
                            <input type="number" 
                            value={this.state.billPercent}                                        
                            onChange={this.handleChange}
                            id="billPercent"
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

export default AddRM;