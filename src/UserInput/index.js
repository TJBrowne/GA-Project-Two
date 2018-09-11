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
        let per = { ...this.state.user };
        per.name = event.target.value;
        this.setState({
            user: per,
        })
    }
    updateBirth = (event) => {
        let per = { ...this.state.user };
        per.dob = event.target.value;
        this.setState({
            user: per,
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.newUserInfo(this.state.user);
    }
    render() {
        return (
            <div className="UserInput">
                <h2>Patient Information</h2>
                <form className="NewUser" onSubmit={this.onSubmit}>
                    <input className="updateName" type="text" placeholder="Name" onChange={this.updateName} /><br></br>
                    <input className="updateBirth" type="text" placeholder="Date Of Birth" onChange={this.updateBirth} /><br></br>
                    <button className="btn-1" type="submit">Submit</button>

                    <div className="nav">
                        <button className="return" onClick={this.props.return}>Return</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default UserInput;