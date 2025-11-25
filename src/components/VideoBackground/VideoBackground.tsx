import React from 'react';

import styles from './VideoBackground.module.css';

interface BannerPhotoProps {
  image: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// A background video spanning the width and height of the page
const VideoBackground: React.FC<BannerPhotoProps> = ({
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

export default VideoBackground;
