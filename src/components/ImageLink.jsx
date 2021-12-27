import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './ImageLink.module.css';

// A link consisting of an image, with a title below it, and a description
const ImageLink = ({
  image, link, title, children,
}) => {
  return (
    <>
      <a href={link}>
        <Image className={styles.imageLinkImage} src={image} alt={`Link: ${title}`} />
      </a>
      <h1 className={styles.imageLinkTitle}>
        <a href={link}>{title}</a>
      </h1>
      <p className={styles.imageLinkText}>{children}</p>
    </>
  );
};

export default ImageLink;
