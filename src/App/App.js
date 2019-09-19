import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
	<HomePage />
      </div>
    );
  }
}

export default App;
