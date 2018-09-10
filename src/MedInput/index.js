import React, { Component } from "react";
import "./style.css";

class MedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medication: {
                name: "",
                dose: "",
                quantity: "",
                directions: "",
                time: ""
            },
            extraFormCount: 0
        }
        this.createExtraInput = this.createExtraInput.bind(this);
    }
    updateName = (event) => {
        let med = { ...this.state.medication }; // make a copy of the object that is in the state >  [...arrayName] & {...this.state.medication}
        med.name = event.target.value;        // modify the property within that object
        this.setState({                       // call setstate to update that object (in the state)
            medication: med,
        })
    }
    updateDose = (event) => {
        let med = { ...this.state.medication };
        med.dose = event.target.value;
        this.setState({
            medication: med,
        })
    }
    updateQuantity = (event) => {
        let med = { ...this.state.medication };
        med.quantity = event.target.value;
        this.setState({
            medication: med,
        })
    }
    updateDirections = (event) => {
        let med = { ...this.state.medication };
        med.directions = event.target.value;
        this.setState({
            medication: med,
        })
    }
    updateTime = (event) => {
        let med = { ...this.state.medication };
        med.time = event.target.value;
        this.setState({
            medication: med,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.newMedList(this.state.medication);
    }
    createExtraInput() {
        for (let i = 0; i < this.state.extraFormCount; i++) {
            return <input className="inputTime" type="time" placeholder="Time" onChange={this.updateTime} />
        }
    }
    render() {
        return (
            <div className="MedInput">
                <h2>Med Input Form</h2>
                <form className="NewMed" onSubmit={this.onSubmit}>
                    <input className="inputMed" type="text" placeholder="Medication Name" onChange={this.updateName} /><br></br>
                    <input className="inputDose" type="text" placeholder="Dose" onChange={this.updateDose} /><br></br>
                    <input className="inputQuan" type="text" placeholder="Quantity" onChange={this.updateQuantity} /><br></br>
                    <input className="inputDir" type="text" placeholder="Directions" onChange={this.updateDirections} /><br></br>

                    <div className="container">
                        <input className="inputTime" type="time" placeholder="Time" onChange={this.updateTime} />
                        {this.createExtraInput()}
                        <button className="btn-2" type="submit" onClick={() => this.setState(preS => preS.extraFormCount++)} >Add Time Input</button><br></br>
                    </div>
                    <button className="btn-2" type="submit">Submit</button><br></br>

                    <div className="nav">
                        <button className="return" onClick={this.props.return}>Return</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default MedInput;