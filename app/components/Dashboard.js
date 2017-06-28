import React from "react";

import Roommates from "./Roommates";
import Bills from "./Bills";

// import {routes, Subroutes} from "../config/routes";

const Dashboard = () => {
    return(
        <div>
            <Roommates/>
            <Bills/>
            <button>Log Out</button>
        </div>
    ); 
}

export default Dashboard;

// renderContent(){
//     return AddBill ? this.state.addBill : AddRm
// }
// render()
// <div>
//     {this.renderContent()}
// </div>
// handleButtonClick() {
//     this.setState({addBill: true})
// }