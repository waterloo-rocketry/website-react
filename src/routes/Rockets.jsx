import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RocketCard from '../components/RocketCard/RocketCard';
import styles from './css/rocket.module.css';
import rocketSharkOfTheSky from '../img/rocket/shark-of-the-sky.jpg';
import rocketUnexplodedOrdnance from '../img/rocket/unexploded-ordnance-2018.jpg';
import rocketVidar3 from '../img/rocket/Vidar3.jpg';
import rocketVidar2 from '../img/rocket/vidar2.jpg';
import rocketVidar from '../img/rocket/Vidar.jpg';
import rocketSilverBrant from '../img/rocket/silver-brant.jpg';
import rocketEridani from '../img/rocket/eridani-2012.jpg';
import rocketWRT1 from '../img/rocket/wrt1.jpg';

const Rockets = () => {
  return (
    <Container fluid>
      <div className={styles.flex__wrapper}>
        <Row xl={3} md={2} sm={1}>
          <Col>
            <RocketCard
              url="/website-react/sots"
              title="SHARK OF THE SKY"
              date="2019"
              image={rocketSharkOfTheSky}
              imagePosition="20% 40%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/uxo"
              title="UNEXPLODED ORDNANCE"
              date="2018"
              image={rocketUnexplodedOrdnance}
              imagePosition="25% 40%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/vidar3"
              title="VIDAR III"
              date="2016/2017"
              image={rocketVidar3}
              imagePosition="25% 100%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/vidar2"
              title="VIDAR II"
              date="2015"
              image={rocketVidar2}
              imagePosition="25% 60%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/vidar"
              title="VIDAR"
              date="2014"
              image={rocketVidar}
              imagePosition="25% 40%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/silverbrant"
              title="SILVER BRANT"
              date="2013"
              image={rocketSilverBrant}
              imagePosition="25% 40%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/eridani"
              title="ERIDANI"
              date="2012"
              image={rocketEridani}
              imagePosition="25% 40%"
            />
          </Col>
          <Col>
            <RocketCard
              url="/website-react/wrt1"
              title="WRT 1"
              date="2011"
              image={rocketWRT1}
              imagePosition="25% 50%"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Rockets;
