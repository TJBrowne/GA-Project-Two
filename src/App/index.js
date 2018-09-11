import React, { Component } from "react";
import "./style.css";
import Welcome from "../Welcome";
import UserInput from "../UserInput";
import MedInput from "../MedInput";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPanel: "Welcome",
      userInfo: JSON.parse(localStorage.getItem("userInfo")) || [{
        name: "",
        dob: "",
      }],
      medsList: JSON.parse(localStorage.getItem("medsList")) || [
        {
          name: "",
          dose: "",
          quantity: "",
          directions: "",
          time: "",
        },
      ]
    }
  }
  newMedList = (newItem) => {
    this.setState(prevState => {
      const newMeds = [...prevState.medsList];
      newMeds.push(newItem);
      localStorage.setItem("medsList", JSON.stringify(newMeds))
      return {
        medsList: newMeds,
      }
    })
  }
  newUserInfo = (newUserItem) => {
    this.setState(prevState => {
      const newUser = [...prevState.userInfo];
      newUser.push(newUserItem);
      localStorage.setItem("userInfo", JSON.stringify(newUser))
      return {
        userInfo: newUser,
      }
    })
  }
  deleteHandler = item => {
    let i = this.state.medsList[item]
    console.log(i);
    let medsList = [...this.state.medsList];
    medsList.splice(i, 1);
    localStorage.setItem('medsList', JSON.stringify(medsList));
    this.setState({
      medsList: medsList,
    });
  };

  deleteHandlerTwo = item => {
    let i = this.state.userInfo[item]
    console.log(i);
    let userInfo = [...this.state.userInfo];
    userInfo.splice(i, 1);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    this.setState({
      userInfo: userInfo,
    });
  };
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
      currentPanel: "Welcome",
    })
  }
  render() {
    return (
      <div className="App">
        {<h1>Your Medicine Cabinet</h1>}
        <div className="container">
          {this.state.medsList.map((med, index) => {
            return (
              <div className="oneMed">
                <h3 key={med.name + med.dose + med.quantity + med.directions + med.time}>
                  {med.name} {med.dose} {med.quantity} {med.directions} {med.time}</h3>

                <input className="delete-button" type="button" value="Delete" onClick={() => this.deleteHandler(index)} />
              </div>
            );
          })}
          <h3>Patient Profile</h3>
          {this.state.userInfo.map((info, index) => {
            return (
              <div className="oneMed">
                <h3 key={info.name + info.dob}>{info.name} {info.dob}</h3>

                <input className="delete-button" type="button" value="Delete" onClick={() => this.deleteHandlerTwo(index)} />
              </div>
            );
          })}
          {this.state.currentPanel === "Welcome" && (
            <div>
              <Welcome
                item={this.props.medsList}
                deleteHandler={this.props.deleteHandler}
              />
              <div className="nav">
                <button className="goToMed" onClick={this.medInput}>Input Med Info</button>
                <button className="goToUser" onClick={this.userInput}>Input User Info</button>
              </div>
            </div>
          )}
          {this.state.currentPanel === "userInput" && (
            <UserInput
              userInfo={this.state.userInput}
              return={this.return}
              newUserInfo={this.newUserInfo}
              newPatient={this.state.userInfo}
            />
          )}
          {this.state.currentPanel === "medInput" && (
            <MedInput className="button"
              medsList={this.state.medInput}
              return={this.return}
              newMedList={this.newMedList}
              newList={this.state.medsList}
              deleteHandler={this.deleteHandler}
            />
          )}
        </div>
      </div>
    )
  }
}
export default App;