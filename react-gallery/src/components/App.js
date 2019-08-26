import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  NavLink
} from "react-router-dom";
import apiKey from "../config.js";

//App components
import Header from "./Header";
import Home from "./Home";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import NotFound from "./NotFound";

export default class App extends Component {
  constructor() {
    super();
    //Set necessary state
    this.state = {
      images: [],
      cats: [],
      dogs: [],
      computers: [],
      loading: true
    };
  }

  //Load images for the topics, to have them there for use
  componentDidMount() {
    this.performSearch("cats");
    this.performSearch("dogs");
    this.performSearch("computers");
  }

  //Setup the function to perform searching the flickr api
  performSearch = topic => {
    this.setState({ loading: true });
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        //if (responseData.photos) then
        //debugger;
        if (topic === "cats") {
          this.setState({ cats: responseData.photos.photo, loading: false });
        } else if (topic === "dogs") {
          this.setState({ dogs: responseData.photos.photo, loading: false });
        } else if (topic === "computers") {
          this.setState({
            computers: responseData.photos.photo,
            loading: false
          });
        } else {
          this.setState({
            images: responseData.photos.photo,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  render() {
    return (
      //Add Browser Router and the routes
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchForm onSearch={this.performSearch} />
          <Switch>
            <Route exact path="/" component={Home} />
            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <Route
                path="/search/cats"
                render={() => <Gallery data={this.state.cats} />}
              />
            )}

            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <Route
                path="/search/dogs"
                render={() => <Gallery data={this.state.dogs} />}
              />
            )}

            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <Route
                path="/search/computers"
                render={() => <Gallery data={this.state.computers} />}
              />
            )}
            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <Route
                path="/search/:topic"
                render={() => <Gallery data={this.state.images} />}
              />
            )}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
