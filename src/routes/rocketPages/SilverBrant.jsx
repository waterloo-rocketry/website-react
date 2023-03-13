import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import silverbrantUpright from '../../img/rocketPhotos/silverbrant_upright.png';

const SilverBrant = () => {
  return (
    <>
      <RocketPageOutline title="Silver Brant" img={silverbrantUpright} altText="VIDAR II Drawing">
        <Content title="Overview">
          Silver Brant is a monotubular hybrid rocket. The most notable feature of Silver
          Brant is its aluminium body. The decision indeed seems odd at first glance,
          aluminium is after all heavier than fiberglass and carbon fiber, which are
          commonly used in rocketry. However, we have good reasons for it. In a hybrid
          rocket like Silver Brant, a large part of rocket is taken up by the combustion
          chamber and oxidizer tank, both of which practically have to be made of
          aluminium. As a result, it made sense to use the tank and combustion
          chamber as the skin and structural support. By eliminating the need
          for an external skin and support structure, we in fact have saved
          weight and simplified the design.
        </Content>
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              10 lb solid steel slug encased in a rubber casing casted in a 3D printed
              ogive shaped mould. Placing the payload at the top allows for better
              weight distribution.
            </Content>
            <Content title="RECOVERY MODULE">
              A single aluminium tube houses a 12&apos; dome-shaped main parachute,
              as well as a 3&apos; dome-shaped drogue chute.
            </Content>
            <Content title="OXIDIZER TANK">
              The sleeveless tank doubles as a storage location for the nitrous oxide and as
              structural support for the rocket. It has been tested to over 800 psi.
              A system of valves controls the oxidizer flow into the engine.
            </Content>
          </>
          <>
            <Content title="FIN CAN & NOZZLE">
              The fin can fits over the engine wall, with three trapezoids fins welded to its face.
              The shape and number of fins was decided based on an OpenRocket simulation of
              our rocket. The graphite nozzle was machined by one of our members using
              the student machine shop here at the University of Waterloo.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              The engine is the result of two years of development. The fuel grain is
              made of HTPB rubber, with a six-sided star-shaped pattern cut through the
              length of the grain. This pattern is ideal for increasing the surface area
              for combustion.
              <br />
              <br />
              Silver Brant&apos;s first engine test was the first engine test to be done at a new
              test location with updated safety shielding around the engine. This shielding
              came in handy when the combustion was burnt through a few seconds into the test
              as a result of a new insulation method that was being tried out.
              <br />
              <br />
              The second engine test was much more successful, with thrust measured at 400 lbs.
              A water bladder filled with water at 40 degrees Celsius was used to raise the
              pressure of the nitrous oxide closer to competition conditions.
              <br />
              <br />
              Both engine tests can be viewed below.
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/sets/72157640556668793">
        <Photo link="https://c2.staticflickr.com/8/7357/12330055445_c911b394bd_b.jpg" altText="Silver Brant Launch setup" />
        <Photo link="https://c2.staticflickr.com/8/7363/12330056595_abce78589e_b.jpg" altText="Silver Brant electronics" />
        <Photo link="https://c2.staticflickr.com/8/7301/12330200773_83e25c168f_b.jpg" altText="Setting up launch" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/vhaZeyLetIY" title="Recovery Testing" />
        <Video link="https://www.youtube.com/embed/GIJsK7e2MlI" altText="Injector test" />
      </Gallery>
    </>
  );
};

export default SilverBrant;
