import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import styles from './AwardItem.module.css';

const AwardItem = ({
  RocketName, AwardName, AwardDescription, ImageAddress, ImageName,
}) => {
  return (

    <div className={`${styles.award__wrapper}`}>

      <div className={`col-md-1 ${styles.content_rocket_tag}`}>
        <h1>{RocketName}</h1>
      </div>

      <div className={`col-sm-3 ${styles.award_body}`}>
        <h2>{AwardName}</h2>
        <div className={`${styles.line}`} />
        <div className={`${styles.content_text}`}>
          <p>
            {AwardDescription}
          </p>
        </div>
      </div>

      <div className="col-sm-2">
        <img className={`${styles.poster}`} src="https://www.waterloorocketry.com/images/awards/30k_SRAD19.png" alt="Test" />
      </div>

    </div>
  );
};

AwardItem.defaultProps = {
  RocketName: 'RocketName',
  AwardName: 'AwardName',
  AwardDescription: 'AwardDescription',
  ImageAddress: 'AwardName',
  ImageName: 'AwardDescription',
};

export default AwardItem;
