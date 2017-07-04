import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
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
    
    //conditionally render add scene after clicking on add roommate
    //clicking button will show add roommate /cancel
    //add roommate fields may be retained; to solve
    listRoomies(props){
        //show minus sign next to each name with delete db method        
        return props.map((i)=>{
            return(
                <ListItem
                primaryText={i}
                />
            );
        });
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
                    <CardTitle title="Roommmates" subtitle="manage roommates"/>
                    <List>
                        {this.listRoomies(["test","array"])}
                    </List>
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