import {Redirect, Route} from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({component: Component, condition, ...rest}) => (
    <Route {...rest} render={(props) => (
        condition
            ? <Component {...props} />
            : <Redirect to='/public'/>
    )}/>
)