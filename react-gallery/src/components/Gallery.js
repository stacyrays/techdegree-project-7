import React from "react";
import { Route, NavLink } from "react-router-dom";

import GalleryItems from "./GalleryItems";

const Gallery = ({ match }) => {
  let searchTerm = match.params.search;
  console.log("this is the search term " + searchTerm);
  return (
    <div className="photo-container">
      <h2>{searchTerm}</h2>
    </div>
  );
};

export default Gallery;

//import React from "react";
//import GalleryItems from "./GalleryItems";

/*const Gallery = ({ match }) => {
  let searchTerm = match.params.search;
  console.log("this is the search term " + searchTerm);
  return (
    <div className="photo-container">
      <h2>{searchTerm}</h2>
    </div>
  );
};

export default Gallery;*/
