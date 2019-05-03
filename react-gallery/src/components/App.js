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
//import Teachers from "./Teachers";
import Searched from "./Searched";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (topic = "cats") => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ images: responseData.photos.photo, loading: false });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchForm onSearch={this.performSearch} />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route
              path="/search/:topic"
              render={() => <Searched data={this.state.images} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
