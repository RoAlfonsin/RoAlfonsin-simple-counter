//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let total_seconds = 0;

function main(){
    ReactDOM.render(<Home seconds={total_seconds++}/>, document.querySelector("#app"));
    console.log(total_seconds)
}

setInterval(main, 1000);

