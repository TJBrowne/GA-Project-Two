import React, { Component } from "react";
import "./style.css";
//import Welcome from "../Welcome";
//import Date from "../Date";
//import UserInput from "../UserInput";
import MedInput from "../MedInput";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: { // name, dob, medical indication, (maybe weight, bp)
        name: "Jon Doe",
        dob: "Feb 23, 1980",
      },
      medsList: [{ //listing all the medications name, dose, directions on 1st page. // each med that will be entered.
        name: "Amoxicillin",
        dose: "500 mg",
        amount: "14",
        directions: "Take 1 capsule, twice daily",
      },
      // { //listing all the medications name, dose, directions on 1st page. // each med that will be entered.
      //   name: "Lo Lo Estrin Fe",
      //   dose: "1 mg/ 10 mcg",
      //   amount: "28",
      //   directions: "Take 1 tablet daily",
      // }
      ]
    }
    // console.log(this.state.userInfo, this.state.medsList);    
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
  // newUserInfo = (newUserItem) => {
  //   this.setState(prevState => {
  //     const newUser = [...prevState.userInfo];
  //     newUser.push(newUserItem);
  //     return {
  //       userInfo: newUser,
  //     }
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>Your Medicine Cabinet</h1>
        {this.state.medsList.map(med => {
          return <h3>{med.name} {med.dose} {med.amount} {med.directions}</h3>
        })}
        <MedInput newMedList={this.newMedList} />
        {/* <UserInput /> */}
        {/* <Welcome /> */}

      </div>
    )
  }
}
export default App;

// key={med.id}