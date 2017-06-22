import React, {Component} from "react";
import {Link} from "react-router-dom";

class AddBills extends Component{
    render(){
        return(
            <div>
                <div className="col-md-4">{/*blank*/}</div>
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">Add Bill</div>
                        </div>
                        <div className="panel-body">
                            <form className="form-horizontal">
                                {/*bill name*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Bill Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                {/*bill cost*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Bill Cost</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                {/*due date*/}
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">Due Date</label>
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

export default AddBills;