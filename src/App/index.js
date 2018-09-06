import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInfo: , // name, dob, medical indication, (maybe weight, bp)
      newMeds: , // name, dose, amount, sig, dr, refills #, mdd.
      listOfMeds: , //listing all the medication name, dose, amount.
    }
  }
  render() {
    return <div className="App">Medicine Cabinet</div>;
  }
}

export default App;
