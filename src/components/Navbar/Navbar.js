import React from "react";
import "./Navbar.css";

const NavBar = props => (

    <nav className="navbar sticky-top" >
        <ul className=" nav  navbar sticky-top" >
            <li className="nav-item name"> Clicky Game</li>
            <li className="nav-item scores">Score: {props.score} || Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default NavBar;
