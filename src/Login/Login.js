import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>
          Log in
          <br /> to get
          <br /> Offers
        </h1>
        <form className="login_form">
          <input type="email" id="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="sign">
            Sign Up Now
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
