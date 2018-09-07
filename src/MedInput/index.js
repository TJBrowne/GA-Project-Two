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
            }
        }
    }
    updateName = (event) => {
        let med = {...this.state.medication};   // make a copy of the object that is in the state >  [...arrayName] & {...this.state.medication}
        med.name = event.target.value;          // modify the property within that object
        this.setState({                         // call setstate to update that object (in the state)
            medication: med,
        })
    }
    updateDose = (event) => {
        let med = {...this.state.medication};
        med.dose = event.target.value;
        this.setState({
            medication: med,
        })
    }
    updateQuantity = (event) => {
        let med = {...this.state.medication};
        med.quantity = event.target.value;
        this.setState({
            medication: med,
        })
    }
    updateDirections = (event) => {
        let med = {...this.state.medication};
        med.directions = event.target.value;
        this.setState({
            medication: med,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.newMedList(this.state.medication);
    }

    render() {
        return (
            <div className="MedInput">
                <h2>Med Input Form</h2>
                <form className="NewMed" onSubmit={this.onSubmit}>
                    <input className="inputMed" type="text" onChange={this.updateName} />Medication Name<br></br>
                    {/* <button className="btn-1" type="submit">Submit Med Name</button><br></br> */}

                    <input className="inputDose" type="text" onChange={this.updateDose} />Dose<br></br>
                    {/* <button className="btn-2" type="submit">Submit Med Dosage</button><br></br> */}

                    <input className="inputQuan" type="text" onChange={this.updateQuantity} />Quantity<br></br>
                    {/* <button className="btn-3" type="submit">Submit Quantity</button><br></br> */}

                    <input className="inputDir" type="text" onChange={this.updateDirections} />Directions<br></br>
                    <button className="btn-4" type="submit">Submit</button><br></br>
                </form>
                {/* <App updateName={this.updateName} updateDose={this.updateDose} updateQuantity={this.updateQuantity} updateDirections={this.updateDirections} /> */}
            </div>
        )
    }
}
export default MedInput;