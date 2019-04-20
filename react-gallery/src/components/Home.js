import React, { Component } from "react";
import apiKey from "../config.js";

class Home extends Component {
  state = {
    searchTerm: "triceratops"
  };
  handleSubmit = e => {
    e.preventDefault();
    let searchTerm = this.search.value;
    let path = `search/${searchTerm}`;
    this.props.history.push(path);
    console.log("this is the search term " + searchTerm);
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
      <div className="stuff">
        <h3>Search</h3>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            ref={input => (this.search = input)}
          />
          <button type="submit">
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
      </div>
    );
  }
}

export default Home;
