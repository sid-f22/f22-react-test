import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="Modal_Backdrop">
        <div id="Modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
