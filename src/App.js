import React, {Component} from "react";
import {AppContextManager} from "./context/AppContextManager";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes} from "./routes/Routes";

class App extends Component {
    render() {
        return (
            <AppContextManager>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/public" className="button">Public Page</Link></li>
                            <li><Link to="/protected">Protected Page</Link></li>
                        </ul>
                        <Routes/>
                    </div>
                </BrowserRouter>
            </AppContextManager>
        );
    }
}

export default App;