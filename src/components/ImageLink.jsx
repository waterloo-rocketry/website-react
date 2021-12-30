import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './ImageLink.module.css';

// A link consisting of an image, with a title below it, and a description
const ImageLink = ({
  image, link, title, children,
}) => {
  return (
    <div className={styles.imageLinkContainer}>
      <a href={link}>
        <Image className={styles.imageLinkImage} src={image} alt={`Link: ${title}`} />
        <h1 className={`${styles.imageLinkTitle} pt-3`}>
          {title}
        </h1>
        <p className={styles.imageLinkText}>{children}</p>
      </a>
    </div>
  );
};

export default ImageLink;
