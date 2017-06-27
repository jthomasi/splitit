import React, {Component} from "react";

class Registration extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
            
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event){
    //     event.preventDefault();
    // }

    // handleSubmit(event){
    //     event.preventDefault();
    // }

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
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            {/*home email*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Email</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control"/>
                                </div>
                            </div>
                            {/*home password*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Password</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control"/>
                                </div>
                            </div>
                            {/*password confirm*/}
                            <div className="form-group">
                                <label className="col-sm-4 control-label">Confirm Password</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control"/>
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