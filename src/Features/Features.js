import React, { Component } from "react";
import "./Features.css";
import idea from "../media/idea.png";

class Features extends Component {
  render() {
    return (
      <div className="Features">
        <img src={idea} alt="idea" />
        <p>
          Best Collection of all Clothes
          <br />
          High Quality
        </p>

        <div id="numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>

        <div id="text">
          <p>
            Well Designed
            <br />
            Components & Templates
          </p>
          <p>
            Great Documentation &
            <br />
            Organized Files
          </p>
          <p>
            Save Hours of
            <br />
            Dancing
          </p>
          <p>
            Well Designed
            <br />
            Components & Templates
          </p>
        </div>
      </div>
    );
  }
}

export default Features;
