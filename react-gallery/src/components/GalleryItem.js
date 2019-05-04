import React from "react";

const GalleryItem = props => (
  <li className="gif-wrap">
    <img src={props.url} alt="" />
  </li>
);

export default GalleryItem;
