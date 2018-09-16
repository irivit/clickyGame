import React from "react";

const NavBar = props => (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <h1>Clicky Game</h1>
        </li>
        <li className="nav-item">
            <h1>Click an image to begin!</h1>
        </li>
        <li className="nav-item">
            <h1>Score: <span> </span></h1>
        </li>
        <li className="nav-item">
            <h1>Top Score: <span> </span></h1>
        </li>
    </ul>
);

export default NavBar;
