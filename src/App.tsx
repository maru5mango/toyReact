import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import RouteComponent from "./router";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Nav />
                <RouteComponent />
            </div>
        </Router>
    );
};

export default App;
