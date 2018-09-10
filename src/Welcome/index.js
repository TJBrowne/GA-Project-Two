import React, { Component } from "react";
import "./style.css";

class Welcome extends Component {
    MyDate() {
        let curDate = new Date();
        let date = curDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currentDate = "Todays Date is= "+date;
        return (
          <p>{currentDate}</p>
        );
      }
    
 render() {
    return (
        <div className="Welcome">
            <h2>Welcome!!!</h2>
            <h3>Today is </h3>
        </div>
    )
}
}

export default Welcome;