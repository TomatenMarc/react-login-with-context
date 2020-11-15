import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";
import {Route, Switch} from "react-router-dom";
import Public from "../pages/Public";
import {ProtectedRoute} from "./ProtectedRoute";
import {Protected} from "../pages/Protected";


export function Routes() {
    const {global} = useContext(AppContext);
    return (
        <Switch>
            <Route path="/public" component={Public}/>
            <ProtectedRoute condition={global.user.authenticated} path="/protected" component={Protected}/>
        </Switch>
    )
}