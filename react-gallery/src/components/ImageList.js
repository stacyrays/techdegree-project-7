import React from "react";
import Image from "./Image";
//import NoGifs from "./NoGifs";

const ImageList = props => {
  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results.map(image => (
      <Image url={/*gif.images.fixed_height.url*/} key={image.id} />
    ));
  } else {
    //gifs = <NoGifs />;
  }

  return <ul className="gif-list">{images}</ul>;
};

export default ImageList;