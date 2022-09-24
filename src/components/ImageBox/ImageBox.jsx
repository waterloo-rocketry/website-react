import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './ImageBox.module.css';

// A bounding box for an image
const ImageBox = ({
  image, width,
}) => {
  return (
    <div className={styles.imageBoxContainer}>
      <Image className={styles.imageBoxImage} src={image} style={{ width: `${width}` }} />
    </div>
  );
};

export default ImageBox;
