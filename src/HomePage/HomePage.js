import React, { Component } from "react";
import "./HomePage.css";
import phone from "../media/iPhone@2x.png";
import symbol from "../media/shape.png";
import more from "../media/icon.png";

class HomePage extends Component {
  render() {
    return (
      <div className="Home_Page">
        <img src={phone} id="phone" alt="iphone" />
        <button id="login">
          Login Now <img src={symbol} alt="symbol" />
        </button>
        <a href="#" className="link">
          Sign Up
        </a>
        <img src={more} id="more_img" alt="click for more" />
        <p>
          Scroll Down to <br />
          Learn More
        </p>
      </div>
    );
  }
}

export default HomePage;
