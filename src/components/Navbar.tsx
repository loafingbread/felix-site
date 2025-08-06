import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
        </nav>
    )
}

export default Navbar;