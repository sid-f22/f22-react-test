import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./NormalView.css";
import image1 from "../media/image.png";
import image2 from "../media/image1.png";
import image3 from "../media/image2.png";
import image4 from "../media/image3.png";
import Desc from "../Desc";

class NormalView extends Component {
  render() {
    return (
      <Container className="Normal_View">
        <Row>
          <Col>
            <img src={image1} id="image1" alt="image1" />
          </Col>
          <Col id="text_image1">
            <Desc />
          </Col>
          <Col>
            <img src={image2} id="image2" alt="image2" />
          </Col>
          <Col id="text_image2">
            <Desc />
          </Col>
        </Row>
        <Row>
          <Col id="text_image3">
            <Desc />
          </Col>
          <Col>
            <img src={image3} id="image3" alt="image3" />
          </Col>
          <Col id="text_image4">
            <Desc />
          </Col>
          <Col>
            <img src={image4} id="image4" alt="image4" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NormalView;
