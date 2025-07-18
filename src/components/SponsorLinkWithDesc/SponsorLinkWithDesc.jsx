import React from 'react';
import { Image } from 'react-bootstrap';

import styles from './SponsorLinkWithDesc.module.css';

const SponsorLinkWithDesc = ({
  image, link, children, logoTier, zoom = 1,
}) => {
  let [imageStyle, containerStyle] = [styles.imgPrevious, styles.logoContainer];

  if (logoTier === 'platinum') {
    [imageStyle, containerStyle] = [styles.imgPlatinum, styles.logoContainerPlatinum];
  } else if (logoTier === 'gold') {
    [imageStyle, containerStyle] = [styles.imgGold, styles.logoContainer];
  } else if (logoTier === 'silver') {
    [imageStyle, containerStyle] = [styles.imgSilver, styles.logoContainer];
  } else if (logoTier === 'bronze') {
    [imageStyle, containerStyle] = [styles.imgBronze, styles.logoContainer];
  }

  const imageZoomStyle = { transform: `scale(${zoom})` };

  return (
    <div className={containerStyle}>
      <a href={link} rel="noreferrer" target="_blank">
        <Image className={imageStyle} src={image} style={imageZoomStyle} />
      </a>
      {
        (logoTier === 'platinum' || logoTier === 'gold') && <p className={styles.imageLinkText}>{children}</p>
      }
    </div>
  );
};

export default SponsorLinkWithDesc;
