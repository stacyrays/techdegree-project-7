import React from "react";
import GalleryItem from "./GalleryItem";
import NoImages from "./NoImages";

const Gallery = props => {
  //Add data to component
  let data = props.data;
  let images;
  //Map over the images and drop each into a Gallery Item
  if (data.length > 0) {
    images = data.map(image => (
      <GalleryItem
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}.jpg`}
        key={image.id}
      />
    ));
  } else {
    images = <NoImages />;
  }

  return (
    <div className="photo-container">
      <ul>{images}</ul>
    </div>
  );
};

export default Gallery;
