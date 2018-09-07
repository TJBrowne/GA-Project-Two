import React, { Component } from "react";
import "./style.css";

class MedInput extends Component {
    constructor(props) {
        super(props);
        
    }

    updateText = (event) => {
        this.setState({
          medsList: event.target.value,
        })
     }

    onSubmit = (event) => {
        event.preventDefault(); 
        this.props.newMedList(this.state.medsList);       
     } 
    
     render () {
        return (
            <div className="MedInput">
            <h2>Medication Information</h2>
            <form className="NewMed" onSubmit={this.onSubmit}>
                <input className="inputMed" type="text" onChange={this.updateText} />
                <button className="btn-1" type="submit">Submit Med Name</button><br></br>

                <input className="inputDose" type="text" onChange={this.updateText} />
                <button className="btn-2" type="submit">Submit Med Dosage</button><br></br>

                <input className="inputQuan" type="text" onChange={this.updateText} />
                <button className="btn-3" type="submit">Submit Quantity</button><br></br>

                <input className="inputDir" type="text" onChange={this.updateText} />
                <button className="btn-4" type="submit">Submit Directions</button><br></br>
            </form>
            </div>
        )
    }    
}
export default MedInput;