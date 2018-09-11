import React, { Component } from "react";
import "./style.css";
import moment from "moment";

class Welcome extends Component {
    
 render() {
    return (
        <div className="Welcome">
            <h2>Today is</h2>
            <h4>{moment().format('MMMM Do YYYY')}</h4>
        </div>
    )
}
}
export default Welcome;