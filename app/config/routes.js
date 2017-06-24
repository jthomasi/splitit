import Registration from "../components/Registration";
import Dashboard from "../components/Dashboard";
import AddBill from "../components/AddBill";
import AddRM from "../components/AddRM";

import {Route} from "react-router-dom";

const routes = [

    {
        path:"/register",
        component: Registration
    },
    {
        path:"/dashboard",
        component: Dashboard,
    },
    {
        path: "/addbill",
        component: AddBill
    },
    {
        path: "/addrm",
        component: AddRM
    }
];

const SubRoutes = (route) =>{
    <Route path={route.path}
    render={props=>(
        <route.component {...props} routes={route.routes}/>
    )}/>
};

export default {routes, SubRoutes};