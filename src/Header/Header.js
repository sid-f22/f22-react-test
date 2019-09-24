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
          <Col sm={{ size: 2, offset: 1 }} md={{ offset: 1 }}>
            <img src={logo} alt="website logo" />
          </Col>
          <Col sm={2} md={4}></Col>
          <Col>
            <a href="#" className="link" id="features">
              Features
            </a>
          </Col>
          <Col sm={3} md={3}>
            <a href="#" className="link" id="works">
              How it works
            </a>
          </Col>
          <Col sm={3} md={3}>
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
