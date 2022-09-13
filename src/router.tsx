import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./views/Home";
import About from "./views/About";
import Author from "./views/Author";

const RouteComponent: React.FC = () => {
    const location = useLocation();
    const { pathname, key } = location;

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/author" element={<Author />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RouteComponent;
