import React from "react";

import ImageCard from "./ImageCard";

import "../styles/ImageList.scss";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard image={image} />;
  });
  console.log(images);
  return (
    <div>
      <ul>{images}</ul>
    </div>
  );
};

export default ImageList;
