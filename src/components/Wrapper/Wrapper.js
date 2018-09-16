import React from "react";
import "./Wrapper.css";
import { getPortPromise } from "portfinder";
// import Navbar from "./components/Navbar";

const Wrapper = props => <div className="wrapper">{props.children}</div>


export default Wrapper;


