import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Auth from '../modules/Auth';

class AddRM extends Component{
    constructor(props){
        super(props);
        this.state = {
            roommates: "",
            name: "",
            email: "",
            percentage: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    //will receive roommates props from Roommates
    componentWillReceiveProps(nextProps) {
        console.log(`next props is {nextProps.roommates}`);
        if(nextProps.roommates !== this.state.roommates){
            this.setState({roommates: nextProps.roommates});
        }
    }

    handleSubmit(event){
        event.preventDefault();

        // send data to Roommates component and database

        // create a string for an HTTP body message
        const name = encodeURIComponent(this.state.roomName);
        const email = encodeURIComponent(this.state.roomEmail);
        const percentage = encodeURIComponent(this.state.billPercent);
        const homeemail = encodeURIComponent(Auth.grabEmail());
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

            // NEED TO RERENDER ROOMMATES
            console.log("roommate submitted");
            // change the current URL to /
            // this.context.router.replace('/');

            //change entry fields to be empty
            this.setState({roomName: ""});
            this.setState({roomEmail: ""});
            this.setState({billPercent: 0});
        } else {
            // failure
            console.log("Failed request");
        }
        });
        xhr.send(formData);
    }

    handleChange(event){
        console.log("roommate value change");

        let newState = {};
        //round bill% to nearest 0.1
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render(){
        return(
            <Card>
                <CardTitle title="Add Roommate"/>
                <CardActions>
                <form className="form-horizontal" method="post" action="/addroommate">
                    {/*name*/}
                    <div className="form-group">
                        <div className="col-sm-2"/>
                        <div className="col-sm-8">
                            <TextField type="text" 
                            value={this.state.roomName}                                        
                            onChange={this.handleChange}
                            id="roomName"
                            floatingLabelText="Roommate Name"
                            hintText="ex. John"/>
                        </div>
                        <div className="col-sm-2"/>
                    </div>
                    {/*email*/}
                    <div className="form-group">
                        <div className="col-sm-2"/>
                        <div className="col-sm-8">
                            <TextField type="email"
                            value={this.state.roomEmail}                                        
                            onChange={this.handleChange}
                            id="roomEmail"
                            floatingLabelText="Roommate Email"
                            hintText="ex. email@example.com"/>
                        </div>
                        <div className="col-sm-2"/>
                    </div>
                    {/*bill percent*/}
                    <div className="form-group">
                        <div className="col-sm-2"/>
                        <div className="col-sm-8">
                            <TextField type="number" 
                            value={this.state.billPercent}                                        
                            onChange={this.handleChange}
                            id="billPercent"
                            floatingLabelText="Bill %"
                            hintText="ex. 50"
                            max={100}
                            min={0}/>
                        </div>
                        <div className="col-sm-2"/>
                    </div>
                </form> 
                </CardActions>
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