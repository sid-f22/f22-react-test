import React, { Component } from "react";
import "./NormalView.css";
import image1 from "../media/image.png";
import image2 from "../media/image1.png";
import image3 from "../media/image2.png";
import image4 from "../media/image3.png";

class NormalView extends Component {
  render() {
    return (
      <div className="Normal_View">
        <img src={image1} id="image1" alt="image1" />
        <img src={image2} id="image2" alt="image2" />
        <img src={image3} id="image3" alt="image3" />
        <img src={image4} id="image4" alt="image4" />
        <div id="text_image1">
          <Desc />
        </div>
        <div id="text_image2">
          <Desc />
        </div>
        <div id="text_image3">
          <Desc />
        </div>
        <div id="text_image4">
          <Desc />
        </div>
      </div>
    );
  }
}

function Desc() {
  return (
    <div>
      <h5>$ 45.84</h5>
      <h4>Soft-Feel Cardigan</h4>
      <p>
        Bunch of components will help
        <br /> you to prototype, design &<br /> build much faster.
      </p>
      <h6>85 Reviews</h6>
    </div>
  );
}

export default NormalView;
