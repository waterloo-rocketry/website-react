import React from 'react';
import { Image } from 'react-bootstrap';

import './ImageLink.css';

// A link consisting of an image, with a title below it, and a description
const ImageLink = ({
  image, link, title, children,
}) => {
  return (
    <>
      <a href={link}>
        <Image className="image-link-image" src={image} alt={`Link: ${title}`} />
      </a>
      <h1 className="image-link-title">
        <a href={image}>{title}</a>
      </h1>
      <p className="image-link-text">{children}</p>
    </>
  );
};

export default ImageLink;
