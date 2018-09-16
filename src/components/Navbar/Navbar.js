import React from "react";
import "./Navbar.css";

const NavBar = props => (

    <nav class="navbar sticky-top">
        <ul className=" nav navbar sticky-top">
            <li className="nav-item"> Clicky Game</li>
            <li className="nav-item"> Click an image to begin! </li>
            <li className="nav-item">Score: {props.score}</li>
            <li className="nav-item">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default NavBar;
