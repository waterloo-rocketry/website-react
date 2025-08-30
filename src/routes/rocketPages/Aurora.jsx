import React from 'react';

import Content from '../../components/Content/Content';
import DividerLine from '../../components/DividerLine/DividerLine';
import RocketPageOutline from '../../components/RocketPageOutline/RocketPageOutline';
import SpecsComponent from '../../components/SpecsComponent/SpecsComponent';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import { Gallery, Photo, Video } from '../../components/Gallery/Gallery';

import auroraUpright from '../../img/rocketPhotos/aurora_upright.webp';

import teamPhoto from '../../img/temp/2025_team_photo.webp';
import riseTower from '../../img/temp/rise_tower.webp';
import launchPhoto from '../../img/temp/aurora_launch.webp';

const Aurora = () => {
  return (
    <>
      <RocketPageOutline
        title="AURORA"
        mediaType="image"
        img={auroraUpright}
        altText="Aurora"
      >
        <Content title="Overview">
          {/* TODO: Replace with updated overview if provided */}
          ’Aurora’ is Waterloo Rocketry’s largest and most advanced rocket built to date.
          Standing over 16 ft tall, the team’s first fully SRAD airframe was propelled by an 11.5 kN
          SRAD liquid engine to over 38,000 ft in apogee, setting a new team altitude record and
          doubling last year’s apogee.

          The rocket included a suite of new features and systems including an active roll-control
          system, a new single-sep dual-deploy recovery system, a deployable hyperspectral camera
          payload and a freely-rotating fin can to mitigate roll reversal.

          Launched in August at the Launch Canada Challenge 2025, Aurora was a resounding success
          and a fitting sequel to Borealis as the team continues to develop new liquid rockets.
        </Content>
        <SpecsComponent
          /* TODO: Update any values as needed */
          specs={[
            [
              { Diameter: '8"', Length: '16 ft' },
              { 'Motor Classification': 'Q', 'Wet Mass': '~253 lbs' },
            ],
            [
              {
                Fuel: 'Ethanol',
                Oxidizer: 'Nitrous Oxide',
              },
              {
                Apogee: '~38,000 ft',
                'Max Velocity': '~2.2 Mach',
              },
            ],
          ]}
        />
        <DividerLine />
        <TwoColumns title="DETAILS">
          <>
            <Content title="AIRFRAME">
              <ul>
                <li>Conic nosecone profile optimized for supersonic flight.</li>
                <li>
                  SRAD composite bodytubes and nosecone manufactured via Vacuum
                  Assisted Resin Transfer Molding (VARTM).
                </li>
                <li>
                  SRAD aluminum couplers/doublers for smooth
                  assembly/disassembly of the airframe.
                </li>
                <li>
                  Metal 3D‑printed longerons for thrust load transfer with
                  removable carbon‑fiber fairings for easy injector access.
                </li>
                <li>
                  Four‑fin design to minimize aerodynamic and wake interference
                  from canards.
                </li>
              </ul>
            </Content>
            <Content title="RECOVERY">
              <ul>
                <li>Dual‑deploy parachute system for reliable recovery.</li>
                <li>SRAD conical ribbon parachute for high‑speed descent.</li>
                <li>
                  Integrated camera to capture drogue and main deployments.
                </li>
                <li>
                  CNC‑machined bulkhead with O‑ring seal and integrated
                  electronics passthroughs.
                </li>
              </ul>
            </Content>
            <Content title="FEED SYSTEM">
              <ul>
                <li>
                  Metal 3D‑printed like‑on‑like impinging injectors to atomize
                  fuel and oxidizer for efficient combustion.
                </li>
                <li>
                  Concentric oxidizer and fuel tanks with a low‑friction piston
                  allowing nitrous to pressurize the fuel.
                </li>
                <li>
                  Custom pneumatic vent valve and pyrotechnic vent valve for
                  safing.
                </li>
                <li>
                  Normally‑closed poppet‑style QD (quick‑disconnect) valve for
                  filling and sealing nitrous oxide.
                </li>
              </ul>
            </Content>
            <Content title="COMBUSTION CHAMBER">
              <ul>
                <li>
                  Aluminum pressure vessel lined with SRAD phenolic fiberglass
                  ablative.
                </li>
                <li>RNX ignition puck with dual embedded Nichrome wires.</li>
                <li>
                  15° Garolite LE nozzle exit bonded to a graphite insert and
                  sealed with high‑temp RTV gasket maker.
                </li>
              </ul>
            </Content>
          </>
          <>
            <Content title="AVIONICS">
              <ul>
                <li>12 unique, interconnected SRAD avionics boards.</li>
                <li>
                  OV5640‑based camera board records 30 fps, 720p flight footage.
                </li>
                <li>
                  Remote arming board to arm altimeters while failing armed.
                </li>
                <li>
                  12 V and 5 V supply rails; 1 Mb/s CAN 2.0B bus for
                  communication.
                </li>
                <li>Custom antennas for live telemetry transmission.</li>
                <li>On‑pad charging enables unlimited hold time.</li>
              </ul>
            </Content>
            <Content title="CONTROLS">
              <ul>
                <li>Active roll control using two steered canards.</li>
                <li>Bevel‑gear mechanical link ensures no net pitch moment.</li>
                <li>
                  Fail‑safe motor control board drives a 5 Nm servo for canard
                  actuation.
                </li>
                <li>
                  Control cycle on STM32H7 + RTOS; dual IMUs (Movella MTi630, ST
                  LSM).
                </li>
                <li>
                  Scheduled LQR controller; EKF estimates orientation, velocity,
                  and aerodynamic coefficients.
                </li>
              </ul>
            </Content>
            <Content title="PAYLOAD">
              <ul>
                <li>
                  Deployable payload separates at apogee; SRAD cruciform chute
                  deploys at 5,000 ft.
                </li>
                <li>
                  Fourier‑transform spectrometer remotely detects greenhouse
                  gases in the troposphere via IR intensity.
                </li>
              </ul>
            </Content>
            <Content title="EGSE">
              <ul>
                <li>
                  Custom Remote Launch Control System over Ethernet radio link
                  for fill, launch, and abort.
                </li>
                <li>
                  DAQ based on NI USB‑6218 records pressure transducers, load
                  cell, anemometer, and RocketCAN data; livestreams to Mission
                  Control.
                </li>
              </ul>
            </Content>
          </>
        </TwoColumns>
      </RocketPageOutline>
      <Gallery title="PHOTO GALLERY" morelink="https://flic.kr/s/aHBqjBHHnP">
        <Photo
          link={launchPhoto}
          altText="Aurora launch"
        />
        <Photo
          link={teamPhoto}
          altText="Aurora team photo"
        />
        <Photo
          link={riseTower}
          altText="Aurora on the launch rail"
        />
      </Gallery>
      <Gallery
        title="VIDEO GALLERY"
        morelink="https://www.youtube.com/user/uwrocketry"
      >
        <Video
          link="https://www.youtube.com/embed/vRShaLdex7Q?si=G7P1eL1YxY9YqCTD"
          title="Aurora — Launch Canada 2025"
        />
        <Video
          link="https://www.youtube.com/embed/65qts5k77M0?si=RCxH2PzIcWDhgeF7"
          altText="Eridium - Static Fire #4"
        />
        <Video
          link="https://www.youtube.com/embed/iuZ5-Du1UfI?si=smPblQNGyaFRywxx"
          altText="Playing Music from Portal on a Liquid Rocket Engine"
        />
      </Gallery>
    </>
  );
};

export default Aurora;
