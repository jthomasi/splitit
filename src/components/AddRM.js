import React, {Component} from "react";
import {Link} from "react-router-dom";

class AddRM extends Component{
    render(){
        return(
            <div>
                <div className="col-md-4">{/*blank*/}</div>
                <div className="col-md-4">
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
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                {/*email*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Email</label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control"/>
                                    </div>
                                </div>
                                {/*bill percent*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Bill %</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </form>
                            <div className="btn-group">
                                <div className="btn btn-default btn-lg">Add</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">{/*blank*/}</div>
            </div>
        );
    }
}

export default AddRM;