import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

export function Protected(props) {
    const {global} = useContext(AppContext);
    return (
        <div>
            <h1>Protected Page</h1>

            Hallo {global.user.name}!
        </div>
    )
}