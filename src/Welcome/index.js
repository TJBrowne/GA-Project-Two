import React, { Component } from "react";
import "./style.css";
import moment from "moment";

class Welcome extends Component {
    
 render() {
    return (
        <div className="Welcome">
            <h2>Welcome</h2>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    )
}
}

export default Welcome;