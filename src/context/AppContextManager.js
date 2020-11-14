import React, {Component} from "react";
import {AppContext} from "./AppContext";

class AppContextManager extends Component {
    /**
     * A global state for the entire app.
     * @type {{global: {user: {authenticated: boolean, name: string}}}}
     */
    state = {
        global: {
            user: {
                name: "Anonymous",
                authenticated: false
            }
        }
    }

    /**
     * This function makes the changes to the global state.
     * @param newState
     */
    update = (newState) => {
        this.setState((prevState) => ({newState}))
    }

    /**
     * This returns everything useful to handle the global state.
     * @returns {AppContext.Provider}
     */
    render() {
        const {children} = this.props
        const {global} = this.state
        const {update} = this

        return (
            <AppContext.Provider
                value={{
                    global,
                    update,
                }}
            >
                {children}
            </AppContext.Provider>
        )
    }
}

export {AppContextManager}