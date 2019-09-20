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
        <div id="text_imagea" className="card">
          <img src={image1} alt="image1" />
          <div className="descText">
            <Desc />
          </div>
        </div>
        <div id="text_imageb" className="card">
          <img src={image2} alt="image2" />
          <div className="descText">
            <Desc />
          </div>
        </div>
        <div id="text_imagec" className="card">
          <img src={image3} alt="image3" />
          <div className="descText">
            <Desc />
          </div>
        </div>
        <div id="text_imaged" className="card">
          <img src={image4} alt="image4" />
          <div className="descText">
            <Desc />
          </div>
        </div>
      </div>
    );
  }
}

export default PlacardView;
