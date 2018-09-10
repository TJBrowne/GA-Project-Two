import React, { Component } from "react";
import "./style.css";

class Date extends Component {

     MyDate() {
        let curDate = new Date();
        let date = curDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currentDate = "Todays Date is= "+date;
        return (
          <p>{currentDate}</p>
        );
      }
}

export default Date; 