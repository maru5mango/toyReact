import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/author", label: "Author" },
];

const Nav: React.FC = () => {
    const links = routes.map(({ to, label }) => {
        return (
            <NavLink to={to} key={to}>
                {label}
            </NavLink>
        );
    });

    return <nav>{links}</nav>;
};

export default Nav;
