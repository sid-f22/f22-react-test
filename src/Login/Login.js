import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Login.css";

class Login extends Component {
  exitModal = event => {
    event.preventDefault();
    this.props.closeModal();
  };

  render() {
    return (
      <div className="Login">
        <Container>
          <Row>
            <Col>
              <h1>
                Log in
                <br /> to get
                <br /> Offers
              </h1>
            </Col>
            <Col>
              <form className="login_form" onSubmit={this.exitModal}>
                <Row>
                  <input type="email" id="email" placeholder="Email Address" />
                </Row>
                <Row>
                  <input type="password" placeholder="Password" />
                </Row>
                <Row>
                  <button type="submit" className="sign">
                    Sign Up Now
                  </button>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
