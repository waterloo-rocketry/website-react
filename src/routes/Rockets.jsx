import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RocketCard from '../components/RocketCard/RocketCard';
import styles from './css/rocket.module.css';
import rocketCardImage from '../img/rocket/shark-of-the-sky.jpg';
import rocketCardImage1 from '../img/rocket/unexploded-ordnance-2018.jpg';
import rocketCardImage2 from '../img/rocket/Vidar3.jpg';
import rocketCardImage3 from '../img/rocket/vidar2.jpg';
import rocketCardImage4 from '../img/rocket/Vidar.jpg';
import rocketCardImage5 from '../img/rocket/silver-brant.jpg';
import rocketCardImage6 from '../img/rocket/eridani-2012.jpg';
import rocketCardImage7 from '../img/rocket/wrt1.jpg';

const Rockets = () => {
  return (
    <Container fluid>
      <div className={styles.flex__wrapper}>
        <Row xl={3} md={2} sm={1}>
          <Col>
            <RocketCard
              url="https://shark-of-the-sky.com"
              title="SHARK OF THE SKY"
              date="2019"
              style={{
                backgroundImage: `url(${rocketCardImage})`,
                backgroundPosition: '20% 40%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://unexploded-ordnance-2018.com"
              title="UNEXPLODED ORDNANCE"
              date="2018"
              style={{
                backgroundImage: `url(${rocketCardImage1})`,
                backgroundPosition: '25% 40%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://vidarIII-2017/2018.com"
              title="VIDAR III"
              date="2016/2017"
              style={{
                backgroundImage: `url(${rocketCardImage2})`,
                backgroundPosition: '25% 100%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://vidarII-2015.com"
              title="VIDAR II"
              date="2015"
              style={{
                backgroundImage: `url(${rocketCardImage3})`,
                backgroundPosition: '25% 60%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://vidar-2014.com"
              title="VIDAR"
              date="2014"
              style={{
                backgroundImage: `url(${rocketCardImage4})`,
                backgroundPosition: '25% 40%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://siver-brant-2013.com"
              title="SILVER BRANT"
              date="2013"
              style={{
                backgroundImage: `url(${rocketCardImage5})`,
                backgroundPosition: '25% 40%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://eridani-2012.com"
              title="ERIDANI"
              date="2012"
              style={{
                backgroundImage: `url(${rocketCardImage6})`,
                backgroundPosition: '25% 40%',
              }}
            />
          </Col>
          <Col>
            <RocketCard
              url="https://wrt-1-2011.com"
              title="WRT 1"
              date="2011"
              style={{
                backgroundImage: `url(${rocketCardImage7})`,
                backgroundPosition: '25% 50%',
              }}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Rockets;
