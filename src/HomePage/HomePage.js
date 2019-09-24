import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./HomePage.css";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import phone from "../media/iPhone@2x.png";
import symbol from "../media/shape.png";
import more from "../media/icon.png";

class HomePage extends Component {
  enterModal = event => {
    console.log(event);
    this.props.showModal(event);
  };

  render() {
    return (
      <div className="Home_Page">
        <Container>
          <Row>
            <Col>
              <Row>
                <h2>Cool New</h2>
              </Row>
              <Row>
                <h3>Fashion Website.</h3>
              </Row>
              <Row>
                <button onClick={() => this.enterModal("login")} id="login">
                  Login Now <img src={symbol} alt="symbol" />
                </button>

                <Modal show={this.props.activeModal === "login"}>
                  <Login closeModal={this.props.closeModal} />
                </Modal>

                <a
                  href="#"
                  className="link"
                  onClick={() => this.enterModal("signup")}
                >
                  Sign Up
                </a>

                <Modal show={this.props.activeModal === "signup"}>
                  <SignUp closeModal={this.props.closeModal} />
                </Modal>
              </Row>
              <Row>
                <img src={more} id="more_img" alt="click for more" />

                <p>
                  Scroll Down to <br />
                  Learn More
                </p>
              </Row>
            </Col>
            <Col>
              <img src={phone} id="phone" alt="iphone" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
