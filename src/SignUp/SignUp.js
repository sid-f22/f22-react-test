import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="Sign_Up">
        <form className="sign_form">
          <input type="text" id="name" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="number" placeholder="Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="sign">
            Sign Up Now
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
