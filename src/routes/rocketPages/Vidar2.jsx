import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import vidar2Upright from '../../img/rocketPhotos/vidar2_upright.png';

const Vidar2 = () => {
  return (
    <>
      <RocketPageOutline title="VIDAR II" img={vidar2Upright} altText="VIDAR II Drawing">
        <Content title="Overview">
          Vidar II is our second iteration of the single stage Vidar launch vehicle,
          and the third iteration of our self-built hybrid rocket engine. The highlights
          of this vehicle are the feed system and recovery module. Since last year&apos;s design,
          we have moved on from our HyperTEK style feed system to a custom pyrotechnic valve.
          There is only one moving part in our system, which simplifies production
          and significantly increases its reliability. Our recovery systems have also
          been upgraded, this time featuring a two-ring release system and separation
          of the booster and payload modules during descent.
        </Content>
        <SpecsComponent specs={
          [
            [{ 'Wet Mass': '70 lbs', 'Dry Mass': '55 lbs' }, { Diameter: '4"', Length: '72"' }, { Fuel: 'Aluminized HTPB', Oxidizer: 'Nitrous Oxide' }],
            [{ 'Peak Thrust': '430 lbf', 'Average Thrust': '330 lbf' }, { 'Burn Time': '9 s', 'Motor Classification': 'N' }, { 'Drogue Chute': 'Drone', 'Drogue Chute Diameter': '5ft' }, { 'Main Chute Diameter': '8ft' }],
          ]
        }
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The payload of Vidar II served only to fulfill the requirements of IREC,
              meaning that it is a 10 pound dead weight. In the future, we plan to
              develop our own functional scientific payload. However, we currently
              place our focus on engine development.
            </Content>
            <Content title="AVIONICS">
              The avionics of Vidar II, like all other major components, are designed
              by members of our team. Our primary flight board is the &quot;Zenith&quot;,
              a student built altimeter, although we also operate a commercial
              Raven PCB as a redundant parallel for safety. Furthermore,
              there are two GPS modules on the rocket for recovery purposes.
            </Content>
            <Content title="RECOVERY MODULE">
              The recovery module is sheltered by a shell of fiberglass. Inside
              this module are housed both a drogue and primary parachute. When
              deployment is signaled by the avionics, CO2 canisters pressurize
              the module and break shear pins. The drogue chute is deployed,
              which stabilizes and slows the rocket. At a predetermined altitude,
              a secondary electrical signal cuts a line which allows the main
              parachute to deploy. The drogue pulls the main parachute out
              from the recovery module, and carries the storage bag away.
              The main parachute, therefore, will support the engine section,
              and the drogue parachute will independently support the payload and avionics.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              Our run tank, like most of the rocket, was also constructed from aluminium.
              The tank wall works dual purpose as the structural airframe, saving weight
              and increasing stability. The run tank is designed for pressures to around
              745 psi. It is attached on each end by a machined aluminium bulkhead.
              The top bulkhead has a permanent vent installed to cool the oxidizer,
              as well as a dip tube to control tank ullage to prevent failure due
              to over-pressurization. The run tank is filled from the bottom bulkhead,
              where a hose can connect to the rocket through the outside of the bulkhead.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              Our combustion chamber is very similar to our previous design.
              We still employ a six sided star-patterned fuel grain of HTPB rubber.
              The HTPB is cased in an ABS tube, which is itself held within the
              aluminium outer shell. The nozzle is machined from graphite.
            </Content>
            <Content title="FINS">
              The fin can was constructed from aluminium, with dimensions determined
              from a flight simulation in OpenRocket.
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/sets/72157682620082462">
        <Photo link="https://c2.staticflickr.com/4/3674/18709120553_a3c3db48e4_c.jpg" altText="VIDAR II development" />
        <Photo link="https://c1.staticflickr.com/1/523/19142114570_9ac6dabc07_c.jpg" altText="The team members setting up VIDAR II launch" />
        <Photo link="https://c1.staticflickr.com/4/3859/18707205224_2b22cc98c7_b.jpg" altText="Setting up launch" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/rYSF0xFHmCU" title="Engine Test" />
        <Video link="https://www.youtube.com/embed/7Vp1dqyjQCw" altText="VIDAR II launch" />
      </Gallery>
    </>
  );
};

export default Vidar2;
