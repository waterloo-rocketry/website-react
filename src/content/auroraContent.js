// src/content/auroraContent.js
import auroraLogo from '../img/rocketPhotos/aurora_logo.webp'; // ← adjust path if needed

export const auroraPoster = '/pdfs/2025_aurora_poster.pdf';

export const AURORA_CONTENT = {
  name: 'AURORA',
  yearBadge: '2025',
  tagline: 'Canada’s student-designed liquid bi-propellant rocket platform',
  summary: `
  Aurora is Waterloo Rocketry’s largest and most advanced rocket built to date. Standing over 16 ft tall, the team’s first fully SRAD airframe was propelled by an 11.5 kN SRAD liquid engine to over 38,000 ft in apogee, setting a new team altitude record and doubling last year’s apogee.
  `,
  hero: {
    mediaType: 'image',
    imageSrc: auroraLogo,
    alt: 'Aurora rocket design',
  },
  specs: [
    { label: 'Diameter', value: '7.5"' },
    { label: 'Length', value: '16 ft' },
    { label: 'Motor Class', value: 'O' },
    { label: 'Wet Mass', value: '~253 lb' },
    { label: 'Fuel', value: 'Ethanol' },
    { label: 'Oxidizer', value: 'Nitrous Oxide' },
    { label: 'Apogee (reported)', value: '~38,000 ft' },
    { label: 'Max Velocity', value: '~2 mach' },
  ],
  sections: [
    {
      id: 'airframe',
      title: 'Airframe',
      body:
        'A modular composite structure designed for fast integration and serviceability, with metallic load-bearing interfaces for durability.',
      bullets: [
        'Conic nosecone profile optimized for supersonic flight',
        'SRAD composite bodytubes & nosecone via VARTM',
        'SRAD aluminum couplers/doublers for smooth assembly/disassembly',
        'Metal 3D-printed longerons for thrust load transfer',
        'Removable carbon-fiber fairings for quick injector access',
        '4-fin design minimizing aerodynamic/wake interference from canards',
      ],
    },
    {
      id: 'recovery',
      title: 'Recovery',
      body:
        'A dual-deploy system with high-speed capability and integrated video capture, built around rugged, sealed hardware.',
      bullets: [
        'Dual-deploy parachute system for reliable recovery',
        'SRAD conical ribbon parachute for high-speed descent',
        'Integrated camera to record drogue & main events',
        'CNC-machined bulkhead with O-ring seal & electronics passthroughs',
      ],
    },
    {
      id: 'feed-system',
      title: 'Feed System',
      body:
        'Concentric tanks with nitrous-pressurized fuel and custom valves enable safe, efficient propellant handling and engine start.',
      bullets: [
        'Metal 3D-printed like-on-like impinging injectors for fine atomization',
        'Concentric oxidizer & fuel tanks with low-friction piston; nitrous pressurizes fuel',
        'Custom pneumatic vent valve and pyrotechnic vent valve for safing',
        'Normally-closed poppet-style QD valve for nitrous fill & seal',
      ],
    },
    {
      id: 'combustion',
      title: 'Combustion Chamber',
      body:
        'An ablatively cooled aluminum pressure vessel with a graphite nozzle insert for thermal robustness and manufacturability.',
      bullets: [
        'Aluminum pressure vessel lined with SRAD phenolic fiberglass ablative',
        'RNX ignition puck with dual embedded Nichrome wires',
        '15° Garolite LE nozzle exit bonded to graphite insert',
        'High-temp RTV gasket maker used for critical seals',
      ],
    },
    {
      id: 'avionics',
      title: 'Avionics',
      body:
        'A network of custom SRAD boards handles power, sequencing, telemetry, and recording over a robust RocketCAN backbone.',
      bullets: [
        '12 unique & interconnected SRAD avionics boards',
        'OV5640-based camera board: 720p @ 30 fps flight footage',
        'Remote arming board to arm altimeters remotely while failing armed',
        '12 V & 5 V supply rails; 1 Mb/s CAN 2.0B communications',
        'Custom antennas for live telemetry transmission',
        'On-pad charging enables effectively unlimited hold time',
      ],
    },
    {
      id: 'controls',
      title: 'Controls',
      body:
        'Active roll control via canards with a fail-safe actuation chain and modern estimation/control on a high-performance MCU.',
      bullets: [
        'Two steered canards provide active roll control',
        'Bevel-gear mechanical link ensures no net pitch moment',
        'Fail-safe motor control board drives a 5 Nm servo',
        'Control cycle on STM32H7 with RTOS',
        'Dual IMUs: Movella MTi630 and ST LSM',
        'Scheduled LQR controller with EKF estimating orientation, velocity, and aero coefficients',
      ],
    },
    {
      id: 'payload',
      title: 'Payload',
      body:
        'A deployable experiment package for atmospheric sensing, separating at apogee under its own recovery system.',
      bullets: [
        'Deployable payload separates from main vehicle at apogee',
        'SRAD cruciform parachute deployed at 5000 ft',
        'Fourier-transform spectrometer detects greenhouse gases via IR intensity',
      ],
    },
    {
      id: 'egse',
      title: 'EGSE & Mission Control',
      body:
        'Custom ground systems for safe remote operations and comprehensive telemetry/recording streamed to Mission Control.',
      bullets: [
        'Remote Launch Control System over ethernet radio link (fill/launch/abort)',
        'DAQ built on NI USB-6218: pressure transducers, load cell, anemometer, RocketCAN',
        'Live data streaming to Mission Control',
      ],
    },
    {
      id: 'report',
      title: 'Project Report',
      body:
        'A comprehensive technical report covering engine, structures, avionics, payloads, ground systems, and controls will be published post-review.',
      cta: {
        label: 'Download Fact Sheet (PDF)',
        href: auroraPoster,
      },
    },
  ],
  photos: [
    {
      src: 'https://live.staticflickr.com/65535/53998023729_45f845ef3f_5k.jpg',
      alt: 'Aurora on display (placeholder)',
    },
    {
      src: 'https://live.staticflickr.com/65535/53997950648_3964dbb7e7_6k.jpg',
      alt: 'Team photo (placeholder)',
    },
    {
      src: 'https://live.staticflickr.com/65535/53997949738_364d5941b1_6k.jpg',
      alt: 'On the launch rail (placeholder)',
    },
  ],
  videos: [
    {
      title: 'Aurora – Launch Reel',
      url: 'https://www.youtube.com/embed/vRShaLdex7Q?si=k5kqdmuP8fEYu2LC',
    },
  ],
};
