import React from 'react';
import styles from './RocketCard.module.css';

// A bounding box for an image
const RocketCard = ({
  link, title, date, style,
}) => {
  return (
    <a href={link}>
      <div className={styles.box__inner} style={style}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.title}>{date}</h1>
      </div>
    </a>
  );
};

export default RocketCard;
