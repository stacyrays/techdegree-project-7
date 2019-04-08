import React, { Component } from "react";
import GalleryItems from "./GalleryItems";

class Gallery extends Component {
  //const { players, title } = props;
  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <GalleryItems />
      </div>
    );
  }
}

export default Gallery;
