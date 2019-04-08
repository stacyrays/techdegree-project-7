import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import apiKey from "../config.js";
import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Gallery />
      </div>
    );
  }
}

export default App;
