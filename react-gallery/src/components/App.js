import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import apiKey from "../config.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
