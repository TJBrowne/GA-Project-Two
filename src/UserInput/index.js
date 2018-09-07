import React, { Component } from "react";
import "./style.css";

class UserInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: "",
                dob: "",
            }
        }
    }
    updateName = (event) => {
        let per = {...this.state.user};
        per.name = event.target.value;
        this.setState ({
            user: per,
        })
    }
    updateBirth = (event) => {
        let per = {...this.state.user};
        per.dob = event.target.value;
        this.setState ({
            user: per,
        })
    }   
    
    onSubmit = (event) => {
        event.preventDefault(); 
        this.props.newUserInfo(this.state.user);       
     }
    render () {
        return (
            <div className="UserInput">
            <h2>Patient Information</h2>
            <form className="NewUser" onSubmit={this.onSubmit}>
                <input className="updateName" type="text" onChange={this.updateName} />Name<br></br>

                <input className="updateBirth" type="text" onChange={this.updateBirth} />Date Of Birth<br></br>
                
                <button className="btn-1" type="submit">Submit</button>
            </form>
            </div>
        )
    } 
}

export default UserInput;