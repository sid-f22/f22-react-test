import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Contact.css";
import map from "../media/map.png";
import social from "../media/socialMedia.png";
import logo from "../media/logo@2x.png";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Container>
          <Row>
            <Col>
              <Row>
                <img src={logo} id="logo" alt="website logo" />
              </Row>

              <div id="text">
                <Row>
                  <h4>Wear Great Clothes Bro</h4>
                </Row>
                <Row>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the.
                  </p>
                </Row>
              </div>
              <Row>
                <img src={social} id="social" alt="social" />
              </Row>
            </Col>
            <Col>
              <img src={map} id="map" alt="map" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
