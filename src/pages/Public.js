import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

export function Public() {
    const {global, update} = useContext(AppContext);
    return (
        <div>
            <h1>Public Page</h1>

            Hallo {global.user.name}!
            <button onClick={() => {
                global.user.authenticated = !global.user.authenticated; // then the global state can be changed
                update(global)
                console.log("Login: " + global.user.authenticated.toString())
            }}>
                {global.user.authenticated ? "Logout" : " Login"}
            </button>
        </div>
    )
}