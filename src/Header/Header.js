import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../media/logo@2x.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="website logo" />
        <div id="nav">
          <a href="#" className="link" id="features">
            Features
          </a>
          <a href="#" className="link" id="works">
            How it works
          </a>
          <a href="#" className="link" id="contact">
            Get in touch
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
