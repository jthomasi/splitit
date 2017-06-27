import React, {Component} from "react";

class Login extends Component {
    //check to see if name and password match; flag if it doesn't
    render(){
        return(
            <div>
                <div className="panel panel-default col-md-4">
                    <div className="panel-heading">
                        <div className="panel-title">Login</div>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal">
                            {/*home name*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Home Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            {/*password*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
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