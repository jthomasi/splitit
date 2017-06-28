import React, {Component} from "react";

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeName: "",
            homeEmail: "",
            password: "",
            passwordConfirm: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("registration submitted");
    }

    handleChange(event){
        console.log("registration info changed");

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState); 
    }
    //check if name and email exists; else throw error
    //check if password matches with each other; else throw error

	render(){
        return(
            <div>
                <div className="col-md-4"></div>
                <div className="panel panel-default col-md-4">
                    <div className="panel-heading">
                        <div className="panel-title">Registration</div>
                    </div>
                    <div className="panel-body">             
                        <form className="form-horizontal" action="/addhome" method="post">
                            {/*home name*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Home Name</label>
                                <div className="col-sm-8">
                                    <input type="text"
                                    value={this.state.homeName}
                                    onChange={this.handleChange}
                                    id="homeName"
                                    className="form-control"/>
                                </div>
                            </div>
                            {/*home email*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email"
                                    value={this.state.homeEmail}
                                    onChange={this.handleChange}
                                    id="homeEmail"
                                    className="form-control"/>
                                </div>
                            </div>
                            {/*home password*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    id="password"
                                    className="form-control"/>
                                </div>
                            </div>
                            {/*password confirm*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Confirm Password</label>
                                <div className="col-sm-8">
                                    <input type="password"
                                    value={this.state.passwordConfirm}
                                    onChange={this.handleChange}
                                    id="passwordConfirm"
                                    className="form-control"/>
                                </div>
                            </div>
                            {/*submit*/}
                            <div className="btn-group">
                                    <button className="btn btn-default btn-lg">Submit</button>
                             </div>
                        </form>                    
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

}

export default Registration;