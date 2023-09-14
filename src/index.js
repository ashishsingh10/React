import React from "react";
import ReactDom from "react-dom";

import './index.css';

import App from './App'; //dont have to give .js file full name as js file is default file

ReactDom.render(
    <App/>,
    document.getElementById("root")
);