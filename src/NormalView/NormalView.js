import React, { Component } from "react";
import "./NormalView.css";
import image from "../media/image.png";
import image1 from "../media/image1.png";
import image2 from "../media/image2.png";
import image3 from "../media/image3.png";

class NormalView extends Component {
  render() {
    return (
      <div className="Normal_View">
        <img src={image} id="image" alt="image" />
        <img src={image1} id="image1" alt="image1" />
        <img src={image2} id="image2" alt="image2" />
        <img src={image3} id="image3" alt="image3" />
      </div>
    );
  }
}

export default NormalView;
