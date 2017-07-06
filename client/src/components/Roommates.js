import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Badge from "material-ui/Badge";
import Chip from "material-ui/Chip";
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

import AddRM from "./AddRM";

class Roommates extends Component {
    constructor(props){
        super(props);
        this.state = {
          isVisible: false
        };
        this.addRoomies = this.addRoomies.bind(this);
        this.listRoomies = this.listRoomies.bind(this);
        this.showAddRM = this.showAddRM.bind(this);
    }
    //add case for no roommates when props[] == 0
    // show %share of bill

    //add roommate fields may be retained; to solve
    listRoomies(){
        //show minus sign next to each name with delete db method 
        //check contents of roommates Table
        return this.props.roommates.map((i)=>{
        // let test = [1,2,3,4,5,6]               
        // return test.map((i)=>{
            return(
                <TableRow>
                    <TableRowColumn>{i}</TableRowColumn>
                    <TableRowColumn>{i}</TableRowColumn>      
                </TableRow>                
            );
        });
    }

    handleRequestDelete(){
        //add delete route
    }

    onTouchTap(){
        //ask if it's okay to delete before deleting
        //reconfigure bill split to be even with all remaining roommates
    }

    addRoomies() {
        console.log("adding");
        this.setState({isVisible: !this.state.isVisible});
    }

    showAddRM() {
        console.log("showAddRM");
        if (this.state.isVisible) {
            return(
                <AddRM/>
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
                    {/*display number of roommmates*/}                                      
                    <CardTitle title={
                        <Badge                                                  
                            badgeContent={this.props.roommates.length()}
                            primary={true}
                        >
                        "Roommmates"
                        </Badge>
                        } subtitle="manage roommates"/>
                    
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Bill Share</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {this.listRoomies()}
                        </TableBody>                           
                    </Table>
                    <Divider/>
                    <CardActions>
                        <div onClick={this.addRoomies}>
                            <RaisedButton label={this.state.isVisible ? "Close" : "Add Roommate"}/>
                        </div>
                    </CardActions>
                    {this.showAddRM()}
                </Card>
            </div>
        );
    }

}

export default Roommates;