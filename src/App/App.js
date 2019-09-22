import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Features from "../Features/Features";

class App extends Component {
  state = {
    show: false,
    activeModal: null
  };

  showModal = activeModal => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      activeModal: activeModal
    });
  };

  render() {
    return (
      <div className="App">
        <Header path={this.props.match.path} />
        <HomePage
          showModal={this.showModal}
          activeModal={this.state.activeModal}
          show={this.state.show}
        />
        <Features />
      </div>
    );
  }
}

export default App;
