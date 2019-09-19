import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Features from "../Features/Features";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header path={this.props.match.path} />
        <HomePage />
        <Features />
      </div>
    );
  }
}

export default App;
