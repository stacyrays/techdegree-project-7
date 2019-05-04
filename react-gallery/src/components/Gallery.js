import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = props => {
  //let topic = match.params.topic;
  console.log(props.data);
  let data = props.data;
  let images;
  //images = data.map(image => console.log(image));
  images = data.map(
    image => (
      <GalleryItem
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}.jpg`}
        key={image.id}
      />
    )
    /*console.log(
      `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${
        image.secret
      }.jpg`
    )*/
  );
  return (
    <div className="photo-container">
      <ul>{images}</ul>
    </div>
  );
};

export default Gallery;
