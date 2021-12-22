import React from 'react';
import { Image } from 'react-bootstrap';

import './ImageLink.css';

const ImageLink = ({
  image, link, title, children,
}) => {
  return (
    <>
      <a href={link}>
        <Image src={image} alt={`Link: ${title}`} style={{ display: 'block', width: '90%', margin: 'auto' }} />
      </a>
      <h1 className="image-link-title">
        <a href={image}>{title}</a>
      </h1>
      <p className="image-link-text">{children}</p>
    </>
  );
};

export default ImageLink;
