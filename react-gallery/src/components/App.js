import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import apiKey from "../config.js";

//App components
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import GalleryForNav from "./GalleryForNav";
import Gallery from "./Gallery";

class App extends Component {
  state = {
    search: [
      {
        term: "dog",
        imageURL:
          "https://www.google.com/search?q=dog&oq=dog&aqs=chrome..69i57j69i60l4j0.351j0j7&sourceid=chrome&ie=UTF-8"
      }
    ]
  };
  handleSubmit = e => {
    e.preventDefault();
    let searchTerm = this.search.value;
    let path = `search/${searchTerm}`;
    //this.props.history.push(path);
    //console.log("this is the search term " + searchTerm);
  };
  searchQuery = query => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log("json should be happening");
        console.log(JSON.stringify(myJson));
        console.log(JSON.stringify(myJson.photos.photo[0]));
      });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
            <Route exact path="/" render={() => <Home />} />
            <Route
              path="/cats"
              render={() => (
                <GalleryForNav title="cats" search={this.searchQuery("cats")} />
              )}
            />
            <Route
              path="/dogs"
              render={() => (
                <GalleryForNav title="dogs" search={this.searchQuery("dogs")} />
              )}
            />
            <Route
              path="/computers"
              render={() => (
                <GalleryForNav
                  title="computers"
                  search={this.searchQuery("computers")}
                />
              )}
            />
            <Route path="/search/:search" render={() => <Gallery />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*<Switch>
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
          </Switch>*/
