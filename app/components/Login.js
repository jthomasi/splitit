import React, {Component} from "react";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeName: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        console.log("login info changed");

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("login submitted")

        // send data to dashboard and trigger isLoggedIn to true
        // this.props.isLoggedIn
        // this.props.checkLogin(this.state.homeName, this.state.password)
    }

    // componentWillReceiveProps()
    // componentDidMount()
    // componentDidUpate()

    //check to see if name and password match; flag if it doesn't
    render(){
        return(
            <div>
                <div className="panel panel-default col-md-4">
                    <div className="panel-heading">
                        <div className="panel-title">Login</div>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" method="get" action="dashboard">
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
                            {/*password*/}
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
                            {/*login button*/}
                            <div className="btn-group">
                                <button className="btn btn-default btn-lg">Login</button>
                            </div>
                            {/*forgot password*/}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;