import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
              <h2>
                <Row>We are in Beta.</Row>
              </h2>
              <Row>
                <h3>Sign up Early Acces.</h3>
              </Row>
            </Col>
            <Col>
              <form className="sign_form" onSubmit={this.exitModal}>
                <input type="text" id="name" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="number" placeholder="Phone Number" />
                <input type="password" placeholder="Password" />
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
