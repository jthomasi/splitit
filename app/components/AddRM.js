import React, {Component} from "react";

class AddRM extends Component{
    constructor(props){
        super(props);
        this.state = {
            roomName: "",
            roomEmail: "",
            billPercent: 0
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
            <div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">Add Roommate</div>
                        </div>
                        <div className="panel-body">
                            <form className="form-horizontal">
                                {/*name*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" 
                                        value={this.state.roomName}                                        
                                        onChange={this.handleChange}
                                        id="roomName"
                                        className="form-control"/>
                                    </div>
                                </div>
                                {/*email*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" 
                                        value={this.state.roomEmail}                                        
                                        onChange={this.handleChange}
                                        id="roomEmail"
                                        className="form-control"/>
                                    </div>
                                </div>
                                {/*bill percent*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Bill %</label>
                                    <div className="col-sm-8">
                                        <input type="number" 
                                        value={this.state.billPercent}                                        
                                        onChange={this.handleChange}
                                        id="billPercent"
                                        className="form-control"/>
                                    </div>
                                </div>
                            </form>
                            <div className="btn-group">
                                <div className="btn btn-default btn-lg">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRM;