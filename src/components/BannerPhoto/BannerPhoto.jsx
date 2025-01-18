import React from 'react';

import styles from './BannerPhoto.module.css';

// A banner photo spanning the width and height of the page
const BannerPhoto = ({
  image,
  style,
  children,
}) => {
  return (
    <div className={styles.bannerPhoto}>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${image})`, ...style }} />
      <div className={styles.bannerText}>
        {children}
      </div>
    </div>
  );
};

export default BannerPhoto;
