import React, { Component } from "react";
import GalleryItems from "./GalleryItems";

class Gallery extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="photo-container">
        <h2>{title}</h2>
        <GalleryItems />
      </div>
    );
  }
}

export default Gallery;
