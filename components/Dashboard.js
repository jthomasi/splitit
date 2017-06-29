import React from "react";

import Roommates from "./Roommates";
import Bills from "./Bills";

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