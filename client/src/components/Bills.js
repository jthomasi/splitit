import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import AddBill from "./AddBill";

class Bills extends Component {
    constructor(props){
        super(props);
        this.state = {
          isVisible: false  
        };
        this.addBill = this.addBill.bind(this);
        this.listBills = this.listBills.bind(this);
        this.showBillAdd = this.showBillAdd.bind(this);
    }
    //add case for no bills when props[] == 0
    //display bill name, bill cost, and bill total
    
    //conditionally render add scene after clicking on AddBill
    //clicking button will show Addbill/cancel
    //addbill fields may be retained; to solve
    listBills(props){
        //show minus sign next to each name with delete db method
        return props.map((i)=>{
            return(
                <ListItem
                primaryText={i}
                />
            );
        });
    }

    addBill() {
        this.setState({isVisible: !this.state.isVisible});
    }

    showBillAdd() {
        console.log("showBillAdd");
        if (this.state.isVisible) {
            return(
                <AddBill/>
            );
        } else {
            console.log("no render");
            return null;
        }
    }

	render(){
        return(
            <div className="col-md-6">
                <Card>
                    <CardTitle title="Bills" subtitle="current bills"/>
                    <List>
                        {this.listBills(["test","array"])}
                    </List>
                    <Divider/>
                    <CardActions>
                        <div onClick={this.addBill}>
                            <RaisedButton label={this.state.isVisible ? "Close" : "Add Bill"}/>
                        </div>
                    </CardActions>
                    {this.showBillAdd()}
                </Card>
            </div>
        );
    }
	

}

export default Bills;