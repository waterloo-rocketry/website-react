import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import lotsUpright from '../../img/rocketPhotos/lots_upright.png';

const LeviathanOfTheSky = () => {
  return (
    <>
      <RocketPageOutline title="LEVIATHAN OF THE SKY" img={lotsUpright} altText="Leviathan of the sky drawing">
        <Content title="Overview">
          Leviathan of the Sky (LotS) is the team&apos;s newest generation of hybrid rocket and was developed to compete in
          2023 Spaceport America Cup (SAC), 30,000 ft SRAD (Student Researched And Designed)
          liquid/hybrid engine category. Building on the success of last year&apos;s rocket (SotS),
          design of KotS focused on mass reduction and engine improvements. KotS is powered
          by the Kismet hybrid SRAD engine.
        </Content>
        <SpecsComponent specs={
          [
            [{ Diameter: '6"', Length: '202"' }, { 'Motor Classification': 'O', 'Wet Mass': '155 lbs' }],
            [{ Fuel: 'Hydroxyl-Terminated Polybutadiene', Oxidizer: 'Nitrous Oxide' }, { 'Two Stage Reefing Parachute': '', 'Full Chute Diameter': '148.8"' }],
          ]
        }
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The team developed a payload this year that assessed the radiation shielding
              properties of various experimental materials including boron-nitride
              nanotubes (BNNTs) and metal oxide composites. These materials are theorized
              to be lighter and better at shielding radiation than traditional
              solutions using lead, steel, or concrete. This experiment was housed in a
              3U CubeSat and was operated using an independent electrical system that
              measured the amount of radiation passing through the rocket and the materials
              during flight and ground operation.
            </Content>
            <Content title="RECOVERY">
              The recovery system onboard KotS uses a reefing two-stage recovery system
              consisting of a small pilot parachute and a control-line reefed main parachute.
              A carbon dioxide canister-based separation mechanism deploys the recovery system
              at apogee, at which point the pilot parachute pulls the reefed parachute out
              of its bag. At 1500 ft AGL, pyrocutters actuated by electric matches disreef
              the full parachute. The system is housed inside the nosecone and a fiberglass
              tube directly below.
              <br />
              <br />
              KotS is equipped with two COTS (Commercial Off-the-Shelf) altimeters for
              recovery deployment. A PerfectFlite StratoLoggerCF and a Featherweight
              Raven3 were used for increased reliability. Each altimeter is powered
              by a 9V battery and is armed immediately prior to launch. The deployment
              system includes dual redundancy, with two carbon dioxide ejectors,
              two pyrotechnic cutters, and both altimeters being capable of independently
              deploying the parachute.
            </Content>
            <Content title="ELECTRICAL">
              KotS has a network of 11 custom PCBs spread throughout the rocket that handle
              everything from arming pyrotechnics and actuating valves to collecting and
              transmitting sensor data during flight. The PCBs communicate over a CAN bus
              which is notable for its property of being masterless; any board can fail
              without bringing down the rest of the system. KotS features a live
              telemetry system built around the RFD900x 1W 900 MHz transceiver,
              allowing critical sensor data such as the rocket&apos;s altitude and
              location to be streamed to the ground during flight.
            </Content>
            <Content title="NOSECONE">
              Because of the possibility of going supersonic, a Von Kármán nosecone with a 4:1
              fineness ratio, built from fiberglass was selected for KotS. Two mold halves
              were formed with foam on a CNC router, and then joined during the layup
              to form the complete nosecone shape. The nosecone was post-cured at 50 °C for
              6 hours, to protect against the hot desert temperatures.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              KotS&apos;s oxidizer tank holds its propellant, nitrous oxide,
              and must also control its pressure while filling. It is built
              from 6061-T6 aluminium alloy and is 80&quot; long, with a 6&quot; outer
              diameter and 3/16&quot; wall thickness. Twenty-four 1/4&quot;-28 bolts
              join the bulkheads to the tube at each end with redundant Buna-N
              o-rings, resulting in a minimum safety factor of 2.4, based on a
              maximum operating pressure of 1000 psi.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              The combustion chamber houses the injector, solid fuel, and nozzle.
              The chamber is insulated with a 1/8&quot; thick G11 fiberglass tube,
              and has a 5&quot; outer diameter. It has been hydrostatically tested
              to 1.5x the maximum expected operating pressure at 700 psi.
              Kismet burns a solid mixture of 90% HTPB and 10% powdered aluminium
              by mass. A pseudo-finocyl grain geometry achieved through investment
              casting is used for the fuel. Once the injector valve opens,
              nitrous oxide flows through the system into the combustion
              chamber. The propellants combust and resulting exhaust gases
              leave the nozzle, providing the rocket with thrust.
            </Content>
            <Content title="FINS">
              KotS uses a carbon fibre fin can holding 3 trapezoidal carbon fiber fins.
              Carbon fiber was chosen for its high specific stiffness and low mass.
              The fins were cut on a CNC router and bonded to the tube with a high
              shear strength epoxy. 3 tip-to-tip layups were done on top of the fins
              with structural carbon fibre plies to add strength.
            </Content>
            <Content title="PROJECT REPORT">
              A complete report of this project, including descriptions of onboard and ground
              support systems, engineering drawings of all rocket components, and a complete
              set of assembly and launch procedures for KotS can be downloaded&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2022_project_report.pdf">here.</a>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://www.flickr.com/photos/uwrocketry/albums/72177720300812163">
        <Photo link="https://live.staticflickr.com/65535/52240643115_afe5ce53b0_h.jpg" altText="Kraken of the sky on display" />
        <Photo link="https://live.staticflickr.com/65535/52240243703_a6e33f0d41_h.jpg" altText="Kraken of the sky on the launch rail" />
        <Photo link="https://live.staticflickr.com/65535/52239253412_c83e159766_h.jpg" altText="Kraken of the sky on the launch rail" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/w3KNlvQaKOg" title="Kismet Static Fire #3" />
        <Video link="https://www.youtube.com/embed/mo3JZF83jas" altText="Static Fire 4" />
        <Video link="https://www.youtube.com/embed/xN5xajUccOE" altText="Shark of the Sky IREC launch" />
      </Gallery>
    </>
  );
};

export default LeviathanOfTheSky;
