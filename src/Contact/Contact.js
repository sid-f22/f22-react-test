import React, { Component } from "react";
import "./Contact.css";
import map from "../media/map.png";
import social from "../media/socialMedia.png";
import logo from "../media/logo@2x.png";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <img src={map} id="map" alt="map" />
        <img src={social} id="social" alt="social" />
        <img src={logo} id="logo" alt="website logo" />
        <div id="text">
          <h4>Wear Great Clothes Bro</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
