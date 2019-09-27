import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./SignUp.css";

class SignUp extends Component {
  exitModal = event => {
    event.preventDefault();
    this.props.closeModal();
  };

  render() {
    return (
      <div className="Sign_Up">
        <Container>
          <Row>
            <Col>
              <Row>
                <h2>We are in Beta.</h2>
              </Row>
              <Row>
                <h3>Sign up Early Acces.</h3>
              </Row>
            </Col>
            <Col>
              <form className="sign_form" onSubmit={this.exitModal}>
                <Row className="align-items-center">
                  <input type="text" id="name" placeholder="Name" />
                </Row>
                <Row className="align-items-center">
                  <input type="email" placeholder="Email Address" />
                </Row>
                <Row className="align-items-center">
                  <input type="number" placeholder="Phone Number" />
                </Row>
                <Row className="align-items-center">
                  <input type="password" placeholder="Password" />
                </Row>

                <button type="submit" className="sign">
                  Sign Up Now
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignUp;
