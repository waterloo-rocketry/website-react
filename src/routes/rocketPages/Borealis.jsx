import { React } from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import borealisUpright from '../../img/rocketPhotos/borealis_upright.webp';

const Borealis = () => {
  return (
    <>
      <RocketPageOutline
        title="BOREALIS"
        img={borealisUpright}
        altText="Borealis"
      >
        <Content title="Overview">
          The ‘Borealis’ rocket, powered by a bi-propellant mixture of ethanol
          and nitrous oxide, reached an altitude of 5,855 metres (19,212 feet)
          and achieved a top speed of 1646 km/h before falling back to the
          ground under its own parachute. Designed entirely by students,
          building on years of team history, this rocket showcases the
          culmination of the advanced engineering capabilities developed by the
          team throughout its past 13 years. The rocket was launched at the
          Launch Canada 2024 competition in Timmins, Ontario, where it won the
          Advanced category first place award. It also the first amateur liquid
          rocket in Canada!
        </Content>
        <SpecsComponent
          specs={[
            [
              { Diameter: '6"', Length: '160"' },
              { 'Motor Classification': 'O', 'Wet Mass': '125 lbs' },
            ],
            [
              {
                Fuel: 'Ethanol',
                Oxidizer: 'Nitrous Oxide',
              },
              {
                Apogee: '19,212 ft',
                'Max Velocity': '1,646 km/h',
              },
            ],
          ]}
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="PAYLOAD">
              The payload onboard LotS contains two experiments. One is state
              estimation, which uses a Kalman filter to fuse data from onboard
              sensors with a model of the rocket dynamics to provide enhanced
              estimates of the rocket state during flight. This was developed as
              a prototype for future active control systems onboard the rocket.
              The second experiment consisted of yeast cultures which were flown
              on the rocket, to assess the effects of increased gravity on
              fermentation activity.
            </Content>
            <Content title="RECOVERY">
              The recovery system onboard Borealis uses a reefing two-stage
              recovery system consisting of a small pilot parachute and a
              control-line reefed main parachute. At apogee a dual redundant CO2
              canister-based separation mechanism pressurizes the parachute bay,
              shearing shear pins in the nose cone and separating the nosecone
              from the rocket body. The pilot chute is deployed into the
              airstream, at which point it pulls the reefed parachute out of its
              bag, allowing the rocket to make a controlled decent. At 1500 ft
              AGL, pyrocutters actuated by electric matches disreef the full
              parachute. The system is housed inside the nosecone and a
              fiberglass tube directly below.
              <br />
              <br />
              Borealis is equipped with two COTS (Commercial Off-the-Shelf)
              altimeters for recovery deployment. A PerfectFlite StratoLoggerCF
              and a Featherweight Raven3 were used for increased reliability.
              Each altimeter is powered by a 9V battery and is armed immediately
              prior to launch. The deployment system includes dual redundancy,
              with two carbon dioxide ejectors, two pyrotechnic cutters, and
              both altimeters being capable of independently deploying the
              parachutes.
            </Content>
            <Content title="ELECTRICAL">
              The 2024 rocket&apos;s avionics system contains 3 main components:
              the RocketCAN bus, a pair of dissimilar COTS Altimeters, and an
              independent GPS tracking module from BigRedBee. The RocketCAN
              network consists of individual boards with single functionalities,
              which communicate through a Controller Area Network (CAN) bus.
              This system was initially introduced in 2019 on Shark of the Sky
              (SotS), but has undergone significant updates since then,
              including new revisions of every board based on lessons learned
              throughout the previous years. In addition, this year, new systems
              have been introduced and upgraded including a long-range live
              telemetry radio system, in-flight camera systems, and an
              on-the-pad charging system.
              <br />
              <br />
              The Electrical Ground Support Equipment (EGSE) has also had
              substantial upgrades this year. Both the Remote Launch Control
              System (RLCS) and Data Acquisition System (DAQ) have had notable
              changes to their boards and software. These changes provided not
              only better quality of life features for the equipment operators
              but also improved both reliability and repairability of the
              aforementioned systems. The most noteworthy change this year was
              the introduction of our Ground-Side Power Distribution system
              (GSPD) which provides a reliable power source for all ground
              systems and the rocket.
            </Content>
            <Content title="NOSECONE">
              With the possibility of going supersonic, a Von Kármán nosecone
              with a 4:1 fineness ratio, built from fiberglass was selected. Two
              mold halves were formed with foam on a CNC router, and then joined
              during a layup to form the complete nosecone shape. The nosecone
              was post-cured at 70 °C for 6 hours, to protect against the hot
              desert temperatures.
            </Content>
          </>
          <>
            <Content title="RUN TANK">
              The oxidizer tank is a 6” OD, 62” long tank sealed on both ends
              with removable bulkheads. The system is blow-down, utilizing the
              self pressurizing properties of nitrous oxide to feed oxidizer
              into the injector. The oxidizer tank is made of 6061-T6 aluminium.
              Thanks to increases in engine efficiency, the length of the
              oxidizer tank was reduced from previous iterations of the Kismet
              engine.
            </Content>
            <Content title="COMBUSTION CHAMBER">
              The combustion chamber is comprised of a structural pressure
              vessel containing the fuel grain and several other combustion
              devices. O-rings are used for the main seals at the forward and
              aft ends of the chamber. To prevent hot combustion gases from
              reaching the casing and/or o-rings, most interfaces between
              internal components of the combustion chamber are sealed with
              high-temperature RTV gasket maker (Permatex 26BR). A
              high-temperature synthetic grease (Super Lube 41160) is applied
              liberally to the exterior surface of the stack of internal
              components to fill the gap between the liner and the casing, which
              facilitates disassembly of the combustion chamber assembly after
              the burn, as well as helping to transmit radial pressure forces
              into the casing.
            </Content>
            <Content title="AIRFRAME">
              The LotS airframe consists mainly of carbon fiber and fiberglass
              composites which make up the nosecone, bodytubes and fins. These
              composites are used for their extremely high strength-to-weight
              ratio, allowing a mere 1.3 mm bodytube thickness to withstand the
              immense flight loads of the rocket. Most parts are manufactured
              in-house using either vacuum bag hand layups or vacuum assisted
              resin transfer molding on CNC-machined female molds. Other
              components, include machined aluminum couplers which are joined to
              the bodytubes using epoxy, and joined tohgether using a series of
              radial bolt rings.
            </Content>
            <Content title="Airbrakes">
              The goal of the airbrakes subsystem is to hit a target apogee
              through the use of active aerodynamic control surfaces that are
              able to adjust the rocket&apos;s flight trajectory mid-flight more
              closely than can be achieved through purely passive controls such
              as propellant mass fill. Historically, precision was achieved
              exclusively through rigorous simulations and precision
              manufacturing, which in 2023 brought LOTS to within 1500ft of the
              30,000ft target apogee. To further improve this result, Borealis
              will fly active in-flight controls in the form of airbrakes.
              <br />
              <br />
              The airbrakes system are composed of three symmetrical plates that
              actuates by extending out of the rocket to create additional
              aerodynamic drag, this is controlled by a PD controller running
              Madgwick filtering and RK 4 trajectory prediction using an onboard
              Vectornav VN-300 IMU, with simulations done in OpenRocket and real
              time drag overwrite with data computed from Ansys Fluent CFD.
              <br />
              <br />
              The airbrakes system brought the Borealis rocket ~800ft closer to
              reported apogee.
            </Content>
            <Content title="PROJECT REPORT">
              A complete report of this project, including descriptions of
              onboard and ground support systems, engineering drawings of all
              rocket components, and a complete set of assembly and launch
              procedures can be downloaded&nbsp;
              <a href="https://www.waterloorocketry.com/pdfs/2023_project_report.pdf">
                here.
              </a>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://flic.kr/s/aHBqjBHHnP">
        <Photo
          link="https://live.staticflickr.com/65535/53998023729_45f845ef3f_5k.jpg"
          altText="Borealis on display"
        />
        <Photo
          link="https://live.staticflickr.com/65535/53997950648_3964dbb7e7_6k.jpg"
          altText="Borealis team photo"
        />
        <Photo
          link="https://live.staticflickr.com/65535/53997949543_8aed44122c_6k.jpg"
          altText="Borealis on the launch rail"
        />
      </Gallery>
      <Gallery
        title="VIDEO GALLERY"
        morelink="https://www.youtube.com/user/uwrocketry"
      >
        <Video
          link="https://www.youtube.com/embed/Z126ZESX3uA?si=4D8Q90V0KRJpKcw1"
          title="Borealis - Launch Canada 2024"
        />
        <Video
          link="https://www.youtube.com/embed/SJO39WQ7Uv0?si=oKVYrJBOVjCckHkc"
          altText="Implementation and Verification of Active Altitude Control System"
        />
        <Video
          link="https://www.youtube.com/embed/ZWvHEy1VRlg?si=QgiqgNEIscUUgS4M"
          altText="Eridium - Liquid Engine Static Fire #2"
        />
      </Gallery>
    </>
  );
};

export default Borealis;
