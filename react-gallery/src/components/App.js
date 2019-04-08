import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import apiKey from "../config.js";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <Nav />
        <Gallery />
      </div>
    );
  }
}

export default App;
