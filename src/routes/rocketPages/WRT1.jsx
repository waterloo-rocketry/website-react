import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import wrt1Upright from '../../img/rocketPhotos/wrt1_upright.webp';

const WRT1 = () => {
  return (
    <>
      <RocketPageOutline title="WRT1" img={wrt1Upright} altText="WRT1 Drawing">
        <Content title="Overview">
          WRT 1 was our first submission to IREC, and stood out among the competition
          as one of the only hybrid engine rockets. Unfortunately, it went ballistic
          shortly after launch, reached a peak altitude of 2000 ft, and was demolished
          upon impact under thrust.
        </Content>
        <DividerLine />
        <Content title="ENGINE">
          Our first four engine tests were a bit disappointing. The first one failed
          to inject oxidizer into the combustion chamber, and the second failed to
          ignite. The third and fourth did not achieve stable combustion. Worse yet,
          the fourth test had to be forcibly stopped due to flames burning through
          the combustion chamber
          <br />
          <br />
          On our fifth try, we achieved stable combustion. The nozzle was destroyed
          in the process, but we finally succeeded in developing a working engine for the rocket.
        </Content>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/sets/72157627016813864">
        <Photo link="https://c2.staticflickr.com/6/5308/5858201000_e3b7121368_b.jpg" altText="Eridani ready for launch" />
        <Photo link="https://c1.staticflickr.com/3/2768/5857643085_09f391abd4_b.jpg" altText="Setting up launch" />
        <Photo link="https://c1.staticflickr.com/3/2782/5857639411_7b67af4cc9_b.jpg" altText="At launch" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/XUa_RQJRFgA" title="Engine test 4" />
        <Video link="https://www.youtube.com/embed/Mdyk2D0ILZA" altText="Engine test 5" />
      </Gallery>
    </>
  );
};

export default WRT1;
