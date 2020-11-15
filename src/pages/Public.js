import React, {Component} from "react";
import {AppContext} from "../context/AppContext";
import Login from "../components/Login";

class Public extends Component {
    static contextType = AppContext

    render() {
        const {global, update} = this.context // this can be used because of the contextType
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

                <Login/>

            </div>
        )
    }
}

export default Public;
