import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

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

        // send data to Roommates component and database
        // this.props.updateRoommate(this.state.roomName, this.state.roomEmail, this.state.billPercent);
    }

    handleChange(event){
        console.log("roommate value change");

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render(){
        return(

// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';

// const AddRM = ({
//   onSubmit,
//   onChange,
//   errors,
//   roommate,
//   home
// }) => (
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
                            name="name"
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
                            name="email"
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
                            name="percentage"
                            className="form-control"/>
                        </div>
                        <div className="col-sm-2"/>
                    </div>
                </form> 

                <Divider/>
                <CardActions>
                    <div onClick={this.handleSubmit}>
                        <FlatButton type="submit" label="Add"/>
                    </div>
                </CardActions>
            </Card>
        );
    }
}

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   errors: PropTypes.object.isRequired,
//   successMessage: PropTypes.string.isRequired,
//   roommate: PropTypes.object.isRequired,
//   home: PropTypes.object.isRequired
// };

export default AddRM;