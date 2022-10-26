import React from 'react';
import RocketCard from '../components/RocketCard/RocketCard';
import styles from './css/rocket.module.css';
import rocketCardImage from '../img/rocket/shark-of-the-skye.jpg';
import rocketCardImage1 from '../img/rocket/unexploded-ordnance-2018.jpg';
import rocketCardImage2 from '../img/rocket/Vidar3.jpg';
import rocketCardImage3 from '../img/rocket/vidar2.jpg';
import rocketCardImage4 from '../img/rocket/Vidar.jpg';
import rocketCardImage5 from '../img/rocket/silver-brant.jpg';
import rocketCardImage6 from '../img/rocket/eridani-2012.jpg';
import rocketCardImage7 from '../img/rocket/wrt1.jpg';

const Rockets = () => {
  return (
    <div className="page-wrap">
      <div className={styles.flex__wrapper}>
        <div className={styles.box}>
          <RocketCard
            link="https://shark-of-the-sky.com"
            title="SHARK OF THE SKY"
            date="2019"
            style={{
              backgroundImage: `url(${rocketCardImage})`,
              backgroundSize: 'cover',
              backgroundPosition: '20% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://unexploded-ordnance-2018.com"
            title="UNEXPLODED ORDNANCE"
            date="2018"
            style={{
              backgroundImage: `url(${rocketCardImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://vidarIII-2017/2018.com"
            title="VIDAR III"
            date="2016/2017"
            style={{
              backgroundImage: `url(${rocketCardImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://vidarII-2015.com"
            title="VIDAR II"
            date="2015"
            style={{
              backgroundImage: `url(${rocketCardImage3})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://vidar-2014.com"
            title="VIDAR"
            date="2014"
            style={{
              backgroundImage: `url(${rocketCardImage4})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://siver-brant-2013.com"
            title="SILVER BRANT"
            date="2013"
            style={{
              backgroundImage: `url(${rocketCardImage5})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://eridani-2012.com"
            title="ERIDANI"
            date="2012"
            style={{
              backgroundImage: `url(${rocketCardImage6})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
        <div className={styles.box}>
          <RocketCard
            link="https://wrt-1-2011.com"
            title="WRT 1"
            date="2011"
            style={{
              backgroundImage: `url(${rocketCardImage7})`,
              backgroundSize: 'cover',
              backgroundPosition: '25% 40%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Rockets;
