import React from "react";

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;

    return (
      <li>
        <img alt={description} src={urls.regular} />
      </li>
    );
  }
}

export default ImageCard;
