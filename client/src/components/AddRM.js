import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import axios from 'axios';

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
        console.log("roommate submitted");

        const formData = {
            name: this.state.roomName,
            email: this.state.roomEmail,
            percentage: this.state.billPercent,
            homeemail: "poopy@gmail.com"
        }

        console.log(formData);
    
        axios({
            method:'post',
            url:'/api/addrm',
            data: formData
        }).then(function(response) {
            console.log("yay "+formData);
        });

        // send data to Roommates component and database
        // this.props.updateRoommate(this.state.roomName, this.state.roomEmail, this.state.billPercent);

        // create a string for an HTTP body message
        // const name = encodeURIComponent(this.state.roomName);
        // const email = encodeURIComponent(this.state.roomEmail);
        // const percentage = encodeURIComponent(this.state.billPercent);
        // const homeemail = encodeURIComponent("poopy@gmail.com");
        // const formData = `name=${name}&email=${email}&percentage=${percentage}&homeemail=${homeemail}`;

        // // create an AJAX request
        // const xhr = new XMLHttpRequest();
        // xhr.open('post', '/api/addrm');
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // xhr.responseType = 'json';
        // xhr.addEventListener('load', () => {
        // if (xhr.status === 200) {
        //     // // success

        //     // NEED TO RERENDER ROOMMATES


        //     // // change the current URL to /
        //     // this.context.router.replace('/');
        // } else {
        //     // failure

        // }
        // });
        // xhr.send(formData);
    }

    handleChange(event){
        console.log("roommate value change");

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render(){
        return(
            <Card>
                <CardTitle title="Add Roommate"/>

                <form className="form-horizontal" method="post" action="/addroommate">
                    {/*name*/}
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" 
                            value={this.state.roomName}                                        
                            onChange={this.handleChange}
                            id="roomName"
                            className="form-control"/>
                        </div>
                        <div className="col-sm-2"/>
                    </div>
                    {/*email*/}
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email" 
                            value={this.state.roomEmail}                                        
                            onChange={this.handleChange}
                            id="roomEmail"
                            className="form-control"/>
                        </div>
                        <div className="col-sm-2"/>
                    </div>
                    {/*bill percent*/}
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Bill %</label>
                        <div className="col-sm-8">
                            <input type="number" 
                            value={this.state.billPercent}                                        
                            onChange={this.handleChange}
                            id="billPercent"
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

export default AddRM;