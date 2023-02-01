import React from 'react';
import styles from './RocketCard.module.css';

/**
 *  A bounding box for an image
 *@param {string} url URL for corresponding rocket page
 *@param {string} title the name of the rocket
 *@param {string} date the year
 */
const RocketCard = ({
  url, title, date, style,
}) => {
  return (
    <div className={styles.box}>
      <a href={url}>
        <div className={styles.box__inner} style={style}>
          <h1 className={styles.title}>{title}</h1>
          <h1 className={styles.title}>{date}</h1>
        </div>
      </a>
    </div>
  );
};

export default RocketCard;
