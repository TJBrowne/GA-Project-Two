import React, { Component } from "react";
import "./style.css";
//import Welcome from "../Welcome";
//import Date from "../Date";
import UserInput from "../UserInput";
import MedInput from "../MedInput";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: [{ 
        name: " ",
        dob: " ",
      }],
      medsList: [
        {
          name: " ",
          dose: " ",
          quantity: " ",
          directions: " ",
        },
      ]
    }
    console.log(this.state.userInfo, this.state.medsList);
  }
  
  newMedList = (newItem) => {
    this.setState(prevState => {
      const newMeds = [...prevState.medsList];
      newMeds.push(newItem);
      return {
        medsList: newMeds,
      }
    })
  }
  newUserInfo = (newUserItem) => {
    this.setState(prevState => {
      const newUser = [...prevState.userInfo];
      newUser.push(newUserItem);
      return {
        userInfo: newUser,
      }
    })
  }

  render() {
    console.log(this.state.medsList);
    console.log(this.state.userInfo);
    
    return (
      <div className="App">
        <h1>Your Medicine Cabinet</h1>
        {this.state.medsList.map(med => {
          return (<h3 key={med.name + med.dose + med.quantity + med.directions}>{med.name} {med.dose} {med.quantity} {med.directions}</h3>);
        })}
        <h1>Your Info</h1>  
        {this.state.userInfo.map(info => {
          return (<h3 key={info.name + info.dob}>{info.name} {info.dob}</h3>)
        })}     
        {/* <h3 key={this.state.userInfo.name + this.state.userInfo.dob}>{this.state.userInfo.name} {this.state.userInfo.dob}</h3> */}

        <MedInput newMedList={this.newMedList} newList={this.state.medsList} />
        <UserInput newUserInfo={this.newUserInfo} newPatient={this.state.userInfo} />
        {/* <Welcome /> */}
      </div>
    )
  }
}
export default App;
