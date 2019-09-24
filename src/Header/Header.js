import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../media/logo@2x.png";

class Header extends Component {
  render() {
    return (
      <Container className="header">
        <Row>
          <Col>
            <img src={logo} alt="website logo" />
          </Col>
          <Col></Col>
          <Col>
            <a href="#" className="link" id="features">
              Features
            </a>
          </Col>
          <Col>
            <a href="#" className="link" id="works">
              How it works
            </a>
          </Col>
          <Col>
            {this.props.path === "/" ? (
              <a href="#" className="link" id="contact">
                Get in touch
              </a>
            ) : (
              <Link to="/" className="link">
                Logout
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
