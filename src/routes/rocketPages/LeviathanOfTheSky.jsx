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
          Leviathan of the Sky (LotS) is the team&apos;s newest generation of
          hybrid rocket and was developed to compete in
          2023 Spaceport America Cup (SAC), 30,000 ft SRAD (Student Researched And Designed)
          liquid/hybrid engine category. Inheriting many design features from KotS in 2022,
          this rocket featured major engine performance upgrades.
          It is powered by the Kismet hybrid SRAD engine.
          <br />
          <br />
          The primary objective of the LotS launch campaign is to attain an apogee of 30,000
          ft and achieve a non-hazardous descent using a reefed parachute system. The secondary
          objective is to collect state estimation data through the payload module during flight.
          Engine control is managed by RocketCAN, a modular and extensible avionics system which
          also includes subsystems for radio communication, GPS tracking and remote recovery arming.
          All launch operations are conducted using the Remote Launch Control System (RLCS),
          which provides launch control capabilities from a range of over 3,000 ft.
        </Content>
        <SpecsComponent specs={
          [
            [{ Diameter: '6"', Length: '175"' }, { 'Motor Classification': 'O', 'Wet Mass': '126.01 lbs' }],
            [{ Fuel: 'Hydroxyl-Terminated Polybutadiene', Oxidizer: 'Nitrous Oxide' },
              { 'Two Stage Reefing Parachute': '', 'Full Chute Diameter': '148.8"' }],
          ]
        }
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The payload onboard LotS contains two experiments.
              One is state estimation, which uses a Kalman filter to fuse data from onboard
              sensors with a model of the rocket dynamics
              to provide enhanced estimates of the rocket state during flight.
              This was developed as a prototype for future active control
              systems onboard the rocket. The second experiment consisted of yeast
              cultures which were flown on the rocket, to assess the
              effects of increased gravity on fermentation activity.
            </Content>
            <Content title="RECOVERY">
              The recovery system on LotS uses a reefing two-stage recovery system
              consisting of a small pilot parachute and a control-line reefed main
              parachute, an iteration on the 2022 recovery system. At apogee, pyrotechnically
              punctured carbon dioxide canisters pressurize the
              recovery bay and separate the nosecone,
              deploying the recovery rigging into the airstream.
              A pilot parachute pulls the reefed
              main parachute out of its bag, which inflates to a
              partial state due to the presence of
              a reefing line. At 1500 ft AGL (above ground level), custom high-power
              titanium pyrotechnic line cutters cut
              the reefing line and disreef the full parachute
              (i.e. allow it to fully inflate) for a soft
              landing. Prior to their activation, a slip ring
              allows the line cutters to rotate with the
              parachute while maintaining electrical contact
              with the deployment electronics.
              <br />
              <br />
              The system uses two COTS (Commercial Off-the-Shelf)
              altimeters. A PerfectFlite StratoLoggerCF
              and for increased reliability, a Featherweight Raven3.
              Each altimeter is powered by a
              separate 9V battery and is armed immediately prior to launch. The
              deployment system includes full
              interlinked dual redundancy, with two carbon dioxide ejectors,
              two pyrotechnic cutters, and two
              electronic matches in all pyrotechnic charges.
              Both altimeters are capable of independently deploying the parachute.
            </Content>
            <Content title="ELECTRICAL">
              The 2024 rocket&apos;s avionics system contains 3 main components: the RocketCAN bus,
              a pair of dissimilar COTS Altimeters, and an independent GPS tracking module from
              BigRedBee. The RocketCAN network consists of individual boards with single
              functionalities, which communicate through a Controller Area Network (CAN)
              bus. This system was initially introduced in 2019 on Shark of the Sky (SotS),
              but has undergone significant updates since then, including new revisions of every
              board based on lessons learned throughout the previous years. In addition, this year,
              new systems have been introduced and upgraded including a long-range live telemetry
              radio system, in-flight camera systems, and an on-the-pad charging system.
              <br />
              <br />
              The Electrical Ground Support Equipment (EGSE) has also had substantial upgrades
              this year. Both the Remote Launch Control System (RLCS) and Data Acquisition
              System (DAQ) have had notable changes to their boards and software. These changes
              provided not only better quality of life features for the equipment operators but
              also improved both reliability and repairability of the aforementioned systems.
              The most noteworthy change this year was the introduction of our Ground-Side Power
              Distribution system (GSPD) which provides a reliable power source for
              all ground systems and the rocket.
            </Content>
            <Content title="NOSECONE">
              With the possibility of going supersonic, a Von Kármán nosecone with a 4:1
              fineness ratio, built from fiberglass was selected. Two mold halves
              were formed with foam on a CNC router, and then joined during a layup
              to form the complete nosecone shape. The nosecone was post-cured at 70 °C for
              6 hours, to protect against the hot desert temperatures.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              The oxidizer tank is a 6” OD, 62” long tank sealed
              on both ends with removable bulkheads.
              The system is blow-down, utilizing the self pressurizing properties of nitrous oxide
              to feed oxidizer into the injector. The oxidizer tank is made of 6061-T6 aluminium.
              Due to increases in engine efficiency, the length of the oxidizer tank was reduced
              from previous iterations of the Kismet engine, allowing for significant mass savings.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              The combustion chamber is comprised of a structural pressure vessel containing
              the fuel grain and several other combustion devices.
              O-rings are used for the main seals at the forward and aft ends of the chamber.
              To prevent hot combustion gases from reaching the casing and/or o-rings,
              most interfaces between internal components of the combustion chamber are sealed
              with high-temperature RTV gasket maker (Permatex 26BR). A high-temperature
              synthetic grease (Super Lube 41160) is applied liberally to the exterior
              surface of the stack of internal components to fill the gap between the
              liner and the casing, which facilitates disassembly of the combustion
              chamber assembly after the burn, as well as helping to transmit radial
              pressure forces into the casing.
            </Content>
            <Content title="AIRFRAME">
              The LotS airframe consists mainly of carbon fiber and fiberglass composites which make
              up the nosecone, bodytubes and fins. These composites are used for their extremely
              high strength-to-weight ratio, allowing a mere 1.3 mm bodytube thickness to withstand
              the immense flight loads of the rocket. Most parts are manufactured in-house using either
              vacuum bag hand layups or vacuum assisted resin transfer molding on CNC-machined
              female molds. Other components, include machined aluminum couplers which are joined to
              the bodytubes using epoxy, and joined tohgether using a series of radial bolt rings.
            </Content>
            <Content title="FINS">
              LotS has a primarily carbon fibre fin can with 4 swept delta fins.
              Carbon fiber was chosen for its high specific stiffness, and was used for all
              components except the boattail and top coupler.
              <br />
              <br />
              The swept delta shape was designed to reduce drag at high speeds.
              Compared to using the same fin shape as previous rockets,
              this shape increased apogee by 3 000ft. To manufacture the fin can,
              first an SRAD bodytube was fabricated using vacuum infusion.
              Afterwards, the fins were cutout from a carbon fiber plate on a CNC router and bonded to the tube
              with a high shear strength epoxy. Next four additional layers
              of fabric were added tip-to-tip in a vacuum assisted wet layup to add
              strength and stiffness. Lastly the aluminum boattail and top couplers
              were bonded which allowed for
              easy and strong attachment to the combustion chamber.
            </Content>
            <Content title="PROJECT REPORT">
              A complete report of this project, including descriptions of onboard and ground
              support systems, engineering drawings of all rocket components, and a complete
              set of assembly and launch procedures can be downloaded&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2023_project_report.pdf">here.</a>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://flic.kr/s/aHBqjAQDBg">
        <Photo link="https://live.staticflickr.com/65535/53109577593_6ae3061bee_b.jpg" altText="Leviathan of the sky on display" />
        <Photo link="https://live.staticflickr.com/65535/53106000167_4222d409cd_b.jpg" altText="Leviathan of the sky on the launch rail" />
        <Photo link="https://live.staticflickr.com/65535/53106569961_320290e488_b.jpg" altText="Leviathan of the sky on the launch rail" />
      </Gallery>
      <Gallery title="VIDEO GALLERY" morelink="https://www.youtube.com/user/uwrocketry">
        <Video link="https://www.youtube.com/embed/mbh0pF7rsBk?si=N-aYlC9pEPQlMmfV" title="Kismet Static Fire #7" />
        <Video link="https://www.youtube.com/embed/2me74BFN_7U?si=0CUmnqoa_Xo4_fED" altText="Kismet Static Fire #8" />
        <Video link="https://www.youtube.com/embed/_xNaNCqM2Go?si=BFmpSo6QmgmJ-mZl" altText="Leviathan of the Sky IREC launch" />
      </Gallery>
    </>
  );
};

export default LeviathanOfTheSky;
