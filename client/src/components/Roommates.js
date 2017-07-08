import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Badge from "material-ui/Badge";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Auth from '../modules/Auth';

import AddRM from "./AddRM";

class Roommates extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleteButton: false,
            isVisible: false,
            arrayIndex: ""
        };
        this.addRoomies = this.addRoomies.bind(this);
        this.listRoomies = this.listRoomies.bind(this);
        this.showAddRM = this.showAddRM.bind(this);
        this.onRowSelection = this.onRowSelection.bind(this);
        this.deleteIndex = this.deleteIndex.bind(this);
        this.totalPercent = this.totalPercent.bind(this);
    }

    listRoomies(){
        return this.props.roommates.map((i)=>{
            return(
                <TableRow>
                    <TableRowColumn>{i.name}</TableRowColumn>
                    <TableRowColumn>{i.percentage}</TableRowColumn>   
                    <TableRowColumn>${(i.percentage * this.props.billTotal / 100).toFixed(2)}</TableRowColumn>   
                </TableRow>                
            );
        });
    }

    addRoomies() {
        this.setState({isVisible: !this.state.isVisible});
    }

    totalPercent(){
        let total = 0;

        this.props.roommates.map((i)=>{
            total += i.percentage;
        });
        return total;
    }

    showAddRM() {
        if (this.state.isVisible) {
            return(
                <AddRM totalPercent={this.totalPercent()}/>
            );
        } else {
            return null;
        }
    }

    onRowSelection(event){
        //grab row index
        this.setState({
            arrayIndex: event
        });

        //toggle delete button visibility
        this.setState({
            deleteButton: !this.state.deleteButton
        });       
    }

    deleteIndex(){
        let index = this.state.arrayIndex;

        if (index != null){
            console.log("delete row");

            // send data to Roommates component and database

            // create a string for an HTTP body message
            const id = encodeURIComponent(this.props.roommates[index]._id);
            console.log(id);
            const formData = `id=${id}`;

            const xhr = new XMLHttpRequest();
            xhr.open('post', '/api/deleterm');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // set the authorization HTTP header
            xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success
                console.log("roommate deleted");
                window.location.reload();
            } else {
                // failure
                console.log("Failed request");
                console.log(xhr.status);
            }
            });
            xhr.send(formData);
        } else {
            console.log("deselected");
        }
    }

	render(){
        const style = {
            margin: 12,
        };

        let deleteButton = null;

        if (this.state.deleteButton) {
            deleteButton = <RaisedButton onTouchTap={this.deleteIndex} label="Delete Selected" style={style}/>
        }

        return(
            <div className="col-md-6">
                <Card> 
                    {/*display number of roommmates*/}                                      
                    <CardTitle title={
                        <Badge                                                  
                            badgeContent={this.props.roommates.length}
                            primary={true}
                        >
                        "Roommates"
                        </Badge>
                        } subtitle="manage roommates"/>
                    
                    <Table
                        onRowSelection = {this.onRowSelection}
                    >
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Bill Share %</TableHeaderColumn>
                                <TableHeaderColumn>Amount</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.listRoomies()}
                        </TableBody>                           
                    </Table>
                    <Divider/>
                    <CardActions>
                        <div>
                            <RaisedButton onTouchTap={this.addRoomies} label={this.state.isVisible ? "Close" : "Add Roommate"} style={style}/>
                            
                            {deleteButton}                            
                        </div>
                    </CardActions>
                    {this.showAddRM()}
                </Card>
            </div>
        );
    }

}

export default Roommates;