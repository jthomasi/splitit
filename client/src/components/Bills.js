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

import AddBill from "./AddBill";

class Bills extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleteButton: false,
            isVisible: false,
            arrayIndex: "" 
        };
        this.addBill = this.addBill.bind(this);
        this.listBills = this.listBills.bind(this);
        this.showBillAdd = this.showBillAdd.bind(this);
        this.onRowSelection = this.onRowSelection.bind(this);
        this.deleteIndex = this.deleteIndex.bind(this);
    }
        
    //addbill fields may be retained; to solve
    listBills(){
        //show minus sign next to each name with delete db method
        return this.props.bills.map((i)=>{
            return(
                <TableRow>
                    <TableRowColumn>{i.name}</TableRowColumn>
                    <TableRowColumn>${i.cost.toFixed(2)}</TableRowColumn>      
                </TableRow>  
            );
        });
    }

    addBill() {
        this.setState({isVisible: !this.state.isVisible});
    }

    showBillAdd() {
        if (this.state.isVisible) {
            return(
                <AddBill/>
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
        console.log(event);

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
            const id = encodeURIComponent(this.props.bills[index]._id);
            console.log(id);
            const formData = `id=${id}`;

            const xhr = new XMLHttpRequest();
            xhr.open('post', '/api/deletebill');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // set the authorization HTTP header
            xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success
                console.log("bill deleted");
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



    totalBill(){
        let total = 0;
        this.props.bills.map((i)=>{
            total += i.cost;
        })
        return total.toFixed(2);
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
                    <CardTitle title={
                        <Badge                                                  
                            badgeContent={this.props.bills.length}
                            primary={true}
                        >
                        "Bills"
                        </Badge>
                        } subtitle="manage bills"/>
                    <Table
                        onRowSelection={this.onRowSelection}
                    >
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Bill</TableHeaderColumn>
                                <TableHeaderColumn>Amount</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.listBills()}
                        </TableBody>                           
                    </Table>
                    <Divider/>
                    <CardText>
                        Total Bill: ${this.totalBill()}
                    </CardText>
                    <Divider/>
                    <CardActions>
                        <div>
                            <RaisedButton onTouchTap={this.addBill} label={this.state.isVisible ? "Close" : "Add Bill"}/>
                            
                             {deleteButton} 
                        </div>
                    </CardActions>
                    {this.showBillAdd()}
                </Card>
            </div>
        );
    }
	

}

export default Bills;