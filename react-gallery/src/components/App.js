import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import apiKey from "../config.js";
import Gallery from "./Gallery";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    searchTerm: "triceratops"
  };

  handleSubmit = e => {
    e.preventDefault();
    //this.props.addPlayer(this.playerInput.current.value);
    let newSearch = this.searchTerm.value;
    let path = `/${newSearch}`;
    console.log(path);
    this.setState(prevState => {
      return {
        searchTerm: newSearch
      };
    });
  };

  render() {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${
        this.state.searchTerm
      }&per_page=24&format=json&nojsoncallback=1`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        console.log(JSON.stringify(myJson.photos.photo[0]));
      });
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/*<SearchForm newSearch={this.handleUpdateSearchTerm} />*/}
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="search"
              name="searchInput"
              placeholder="Search photos"
              ref={input => (this.searchTerm = input)}
              required
            />
            <button type="Submit" defaultValue="Search">
              <svg
                fill="#fff"
                height="24"
                viewBox="0 0 23 23"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </form>
          <Nav />
          <Switch>
            <Route path="/dogs" render={() => <Gallery title="Dogs" />} />
            <Route path="/cats" render={() => <Gallery title="Cats" />} />
            <Route
              path="/computers"
              render={() => <Gallery title="Computers" />}
            />
            <Route
              path="/:newSearch"
              render={() => <Gallery title={this.state.searchTerm} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*<Route
exact
path="/gallery"
render={() => <Gallery searchTerm="Cats" />}
/>*/
