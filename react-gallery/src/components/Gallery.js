import React from "react";
import GalleryItem from "./GalleryItem";
import NoImages from "./NoImages";

const Gallery = props => {
  //let topic = match.params.topic;
  console.log(props.data);
  let data = props.data;
  let images;
  //images = data.map(image => console.log(image));
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
