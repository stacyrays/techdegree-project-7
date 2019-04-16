import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import apiKey from "../config.js";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    searchTerm: "Dog"
  };
  render() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ae9b4b750f6facecc1cc070b33b2e321&tags=dog&per_page=24&format=json&nojsoncallback=1"
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
          <SearchForm />
          <Nav />
          <Switch>
            <Route
              path="/search/:term"
              render={() => <Gallery title="Dogs" />}
            />
            <Route path="/dogs" render={() => <Gallery title="Dogs" />} />
            <Route path="/cats" render={() => <Gallery title="Cats" />} />
            <Route
              path="/computers"
              render={() => <Gallery title="Computers" />}
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
