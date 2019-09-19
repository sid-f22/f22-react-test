import React, { Component } from "react";
import "./PlacardView.css";
import image1 from "../media/image.png";
import image2 from "../media/image1.png";
import image3 from "../media/image2.png";
import image4 from "../media/image3.png";
import Desc from "../Desc";

class PlacardView extends Component {
  render() {
    return (
      <div className="Placard_View">
        <img src={image1} id="image1" alt="image1" />
        <img src={image2} id="image2" alt="image2" />
        <img src={image3} id="imagec" alt="image3" />
        <img src={image4} id="imaged" alt="image4" />
        <div id="text_image1" className="card">
          <Desc />
        </div>
        <div id="text_image2" className="card">
          <Desc />
        </div>
        <div id="text_image1" className="card">
          <Desc />
        </div>
        <div id="text_image2" className="card">
          <Desc />
        </div>
      </div>
    );
  }
}

export default PlacardView;
