import React, { Component } from "react";
import "./style.css";
import Welcome from "../Welcome";
import CurrentMeds from "../CurrentMeds";
import UserInput from "../UserInput";
import MedInput from "../MedInput";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPanel: "Welcome",
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
          time: " ",
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
  welcome = () => {
    this.setState({
      currentPanel: "welcome",
    })
  }
  medInput = () => {
    this.setState({
      currentPanel: "medInput",
    })
  }
  userInput = () => {
    this.setState({
      currentPanel: "userInput",
    })
  }
  return = () => {
    this.setState({
      currentPanel: "welcome",
    })
  }

  render() {
    console.log(this.state.medsList);
    console.log(this.state.userInfo);

    return (
      <div className="App">
        {/* <h1>Your Medicine Cabinet</h1>
        {this.state.medsList.map(med => {
          return (<h3 key={med.name + med.dose + med.quantity + med.directions + med.time}>
            {med.name} {med.dose} {med.quantity} {med.directions} {med.time}</h3>);
        })}
        <h1>Your Info</h1>  
        {this.state.userInfo.map(info => {
          return (<h3 key={info.name + info.dob}>{info.name} {info.dob}</h3>)
        })}     */}
        {/* <Welcome /> */}
        {this.state.currentPanel === "Welcome" && (
          <div>
            <Welcome
            // medsList={this.state.medInput}
            // userInfo={this.state.UserInput}
            />
            <div className="nav">
              <button className="goToMed" onClick={this.medInput}>Input Med Info</button>
              <button className="goToUser" onClick={this.userInput}>Input User Info</button>
            </div>
          </div>
        )}
        {/* <div className="nav">
          <button className="goToMed" onClick={this.medInput}>Input Med Info</button>
          <button className="goToUser" onClick={this.userInput}>Input User Info</button>
        </div>  */}

        {/* <UserInput newUserInfo={this.newUserInfo} newPatient={this.state.userInfo} /> */}
        {this.state.currentPanel === "userInput" && (
          <UserInput
            userInfo={this.state.userInput}
            return={this.return}
          />
        )}
        {/* <MedInput newMedList={this.newMedList} newList={this.state.medsList} /> */}
        {this.state.currentPanel === "medInput" && (
          <MedInput
            medsList={this.state.medInput}
            return={this.return}
          />
        )}

        {this.state.currentPanel === "CurrentMeds" && <CurrentMeds />}

      </div>
    )
  }
}
export default App;