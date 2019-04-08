import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  //const { players, title } = props;
  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        <GalleryItem />
      </ul>
    </div>
  );
};

export default Gallery;
