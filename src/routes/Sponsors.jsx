import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import DividerLine from '../components/DividerLine/DividerLine';
import SponsorLinkWithDesc from '../components/SponsorLinkWithDesc/SponsorLinkWithDesc';

import sponsorCoverImage from '../img/sponsorship/cover_sponsors.jpg';

// all sponsor images...
// PLATINUM
import solidworks from '../img/sponsorship/1_platinum_sponsors/solidworks_logo.png';
import stein from '../img/sponsorship/1_platinum_sponsors/stein_logo.png';
import waterlooEngFaculty from '../img/sponsorship/1_platinum_sponsors/Waterloo_ENG_Faculty_Logo_rgb.png';
import WEEF from '../img/sponsorship/1_platinum_sponsors/WEEF_Logo_yellow.png';
import demtool from '../img/sponsorship/1_platinum_sponsors/demtool.png';
import harwin from '../img/sponsorship/1_platinum_sponsors/harwin_logo.png';

// GOLD
import ansys from '../img/sponsorship/2_gold_sponsors/ANSYS_Logo.png';
import keysight from '../img/sponsorship/2_gold_sponsors/Keysight.png';
import liftwerx from '../img/sponsorship/2_gold_sponsors/liftwerx_logo.png';
import linde from '../img/sponsorship/2_gold_sponsors/Linde.jpg';
import dxengineering from '../img/sponsorship/2_gold_sponsors/DX_Engineering_logo.jpg';

// SILVER
import customClothes from '../img/sponsorship/3_silver_sponsors/custom_clothes_canada.png';
import ieee from '../img/sponsorship/3_silver_sponsors/IEEE-Logo.jpg';
import mef from '../img/sponsorship/3_silver_sponsors/mef_logo.png';
import swagelok from '../img/sponsorship/3_silver_sponsors/swagelok_logo.png';
import moderncrane from '../img/sponsorship/3_silver_sponsors/modern_crane_logo.jpg';
import pelican from '../img/sponsorship/3_silver_sponsors/pelican_logo.png';
import rdx from '../img/sponsorship/3_silver_sponsors/RDX_logo.png';
import standfordfleming from '../img/sponsorship/3_silver_sponsors/SFF_Logo.png';
import teamgantt from '../img/sponsorship/3_silver_sponsors/team_gantt_logo.png';
import jr from '../img/sponsorship/3_silver_sponsors/JR_security_solutions_logo.png';
import bomist from '../img/sponsorship/3_silver_sponsors/bomist_logo.png';
import inteliheat from '../img/sponsorship/3_silver_sponsors/inteliheat_logo.jpg';

// BRONZE
import acornFireSafety from '../img/sponsorship/4_bronze_sponsors/acorn_fire_and_safety.png';
import waterlooElectroplating from '../img/sponsorship/4_bronze_sponsors/Waterloo-Electroplating.png';
import kwsewingmachine from '../img/sponsorship/4_bronze_sponsors/KW_sewing_machine_logo.png';
import ceno360 from '../img/sponsorship/4_bronze_sponsors/ceno_360_logo.png';
import rutland from '../img/sponsorship/4_bronze_sponsors/rutland_logo.jpg';

// PREVIOUS
import ariss from '../img/sponsorship/5_previous_sponsors/ariss.png';
import bigredbee from '../img/sponsorship/5_previous_sponsors/bigredbee_logo.png';
import broadcom from '../img/sponsorship/5_previous_sponsors/Broadcom_Logo.png';
import eljen from '../img/sponsorship/5_previous_sponsors/eljen_logo.png';
import ereztech from '../img/sponsorship/5_previous_sponsors/ereztech-logo.png';
import robotshop from '../img/sponsorship/5_previous_sponsors/robotshop.png';
import triumph from '../img/sponsorship/5_previous_sponsors/triumph-logo.png';
import mrc from '../img/sponsorship/5_previous_sponsors/MRC.png';
import engsoc from '../img/sponsorship/5_previous_sponsors/engsoc_logo.png';
import AandP from '../img/sponsorship/5_previous_sponsors/A&P_Logo.png';
import olin from '../img/sponsorship/5_previous_sponsors/olin-corporation.png';
import aircraftSpruce from '../img/sponsorship/5_previous_sponsors/Aircraft_Spruce_Logo.png';
import airtech from '../img/sponsorship/5_previous_sponsors/Airtech.png';
import Aversan from '../img/sponsorship/5_previous_sponsors/AversanLogo.jpg';
import bayAreaCircuits from '../img/sponsorship/5_previous_sponsors/bay_area_circuits.png';
import BGF from '../img/sponsorship/5_previous_sponsors/BGF.png';
import BJ from '../img/sponsorship/5_previous_sponsors/bj_photo.png';
import Bombardier from '../img/sponsorship/5_previous_sponsors/Bombardier-Aerospace.jpg';
import chemroy from '../img/sponsorship/5_previous_sponsors/chemroy.gif';
import cimetrix from '../img/sponsorship/5_previous_sponsors/Cimetrix-Logo.jpg';
import digi from '../img/sponsorship/5_previous_sponsors/digi_logo.png';
import duttonLainson from '../img/sponsorship/5_previous_sponsors/dutton_lainson.png';
import ferrotec from '../img/sponsorship/5_previous_sponsors/ferrotec.png';
import firecam from '../img/sponsorship/5_previous_sponsors/firecam_logo.png';
import futureElectronics from '../img/sponsorship/5_previous_sponsors/future-electronics.gif';
import fxWorks from '../img/sponsorship/5_previous_sponsors/fx_works.png';
import hatch from '../img/sponsorship/5_previous_sponsors/Hatch-logo.png';
import hickoryHill from '../img/sponsorship/5_previous_sponsors/hickory_hill_logo.png';
import kerbalSpaceProgram from '../img/sponsorship/5_previous_sponsors/Kerbal_Space_Program_High_Res_Logo.png';
import misumi from '../img/sponsorship/5_previous_sponsors/misumi.png';
import mitutoyo from '../img/sponsorship/5_previous_sponsors/Mitutoyo_Logo.png';
import msam from '../img/sponsorship/5_previous_sponsors/msam_logo.png';
import nationalInstruments from '../img/sponsorship/5_previous_sponsors/ni_logo.JPG';
import prattAndWhitney from '../img/sponsorship/5_previous_sponsors/Pratt-and-Whitney.png';
import princessAuto from '../img/sponsorship/5_previous_sponsors/Princess_Auto_Logo.png';
import proto3000 from '../img/sponsorship/5_previous_sponsors/proto3000.png';
import qnx from '../img/sponsorship/5_previous_sponsors/qnx-logo-black-medium.png';
import richardDudgeon from '../img/sponsorship/5_previous_sponsors/richard_dudgeon_logo.png';
import searlesSurveying from '../img/sponsorship/5_previous_sponsors/Searles_Surveying_Logo.png';
import shelterlogic from '../img/sponsorship/5_previous_sponsors/shelterlogic_logo.png';
import stratasys from '../img/sponsorship/5_previous_sponsors/Stratasys-3.png';
import textreme from '../img/sponsorship/5_previous_sponsors/textreme.png';
import ublox from '../img/sponsorship/5_previous_sponsors/u-blox_logo_rgb.jpg';
import waterlooEngMechanical from '../img/sponsorship/5_previous_sponsors/Waterloo_ENG_Mechanical_Logo_rgb.png';

const Sponsors = () => {
  return (
    <>
      <CoverPhoto image={sponsorCoverImage} style={{ position: '50% 90%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-4 justify-content-center">
          <Col lg={{ span: 10 }}>
            <Content title="WANT TO BECOME A SPONSOR?">
              <p>
                If you would like to contact us about sponsorship opportunities, check out our
                sponsorship package
                {' '}
                <a href="sponsorship">here</a>
                {' '}
                and please email us at
                {' '}
                <a href="mailto:contact@waterloorocketry.com">contact@waterloorocketry.com</a>
                .
              </p>
            </Content>
          </Col>
        </Row>

        <Row className="my-4 mx-2 gx-4 justify-content-center text-center">
          <Content title="PLATINUM SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 justify-content-center">
            <Col lg={{ span: 5 }}>
              <p> </p>
              <SponsorLinkWithDesc logoTier="platinum" image={stein} link="https://steinindustriesinc.com/">
                <p className="content-text">
                  Stein Industries Inc. was founded in 1992 by company president Dan Steinhaur along
                  with a number of highly skilled and experienced associates. This core group
                  collectively brought with it a wealth of expertise in coil winding, transformer
                  design, manufacturing, and testing of high voltage transformers and DC supplies.
                </p>
                <p className="content-text">
                  Since its incorporation, Stein Industries Inc. has developed an extensive product
                  line to meet the highest industrial standards in the broadcast, power generation,
                  pollution control, power distribution and advanced research sectors. Stein
                  Industries Inc. manufactures power supplies for use with the new multi-collector,
                  energy saving IOT devices now being introduced by various tube vendors.
                  More than five years ago Stein Industries Inc. acquired a small manufacturer
                  of electronic components utilized in our Transformers. This acquisition has
                  led to the growth and development of our contract electronics manufacturing,
                  LED lighting product line and the luxlinx&trade;
                  smart lighting control solutions. Stein Industries Inc. will continue
                  developing by addressing the needs of our customers and making investments in
                  research and development to innovate existing products and creating
                  cutting-edge solutions for the future.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="platinum" image={demtool} link="https://demtool.com/">
                <p className="content-text">
                  Established in 2004 by Jim and Derrick Demerling in Petersburg, Ontario, Demtool
                  is a family-led enterprise. With the addition of their brother Matt, the trio
                  leads a team of over 50 talented individuals, including professional
                  administrators, engineers, skilled labourers, and tradesmen. Committed to
                  continuous improvement, Demtool strives to exceed customer expectations,
                  providing an exceptional customer experience and delivering top-notch end
                  products.
                </p>
                <p className="content-text">
                  Operating on the principles of Quality and Integrity, Demtool fosters a culture
                  of innovation, welcoming new ideas from every team member. The company maintains
                  a clean and safe working environment, with a team that takes immense pride in
                  their work. As industry leaders, we invest in cutting-edge technologies,
                  software, machinery, and training to equip employees with the best tools
                  available. We also actively support and sponsors numerous programs that promote
                  Science, Technology, Engineering, and Math (STEM), recognizing the importance of
                  inspiring the next generation. Demtool is deeply engaged in the local community,
                  participating in and contributing to fundraisers and charitable events,
                  reflecting its dedication to making a positive impact on the world around them.
                </p>
              </SponsorLinkWithDesc>
            </Col>
          </Row>

          <Row className="my-4 mx-2 gx-4 justify-content-center text-center">
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="platinum" image={WEEF} link="https://uwaterloo.ca/engineering-endowment-foundation/">
                <p className="content-text">
                  WEEF stands for the Waterloo Engineering Endowment Foundation. The foundation was
                  founded in 1990 by two engineering students, Avi Belinsky and John Vellinga.
                  The goal of WEEF is to continuously improve the educational environment for
                  undergraduate engineering students, and maintain our outstanding reputation.
                </p>
                <p className="content-text">
                  The premise of WEEF is simple. WEEF collects donations and puts them into a fund.
                  The interest earned on the fund is spent each year on undergraduate laboratory
                  equipment, student projects, computer upgrades and academic tools/teaching
                  facilities. The principal portion of the fund is never spent which allows the
                  interest each year to grow, hence &quot;The Gift That Keeps On Giving&quot;.
                  The donations that build the fund come from three sources: student donations,
                  Employer Matching Contribution (EMC), and engineering Alumni
                  (including graduates&apos; Plummer&apos;s Pledge). As of 2018,
                  the WEEF fund has a principal of over $15,000,000. WEEF is proud to support
                  undergraduate engineering across all departments at the University of Waterloo.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="platinum" image={waterlooEngFaculty} link="https://uwaterloo.ca/engineering/">
                <p className="content-text">
                  Waterloo Engineering is Canada&apos;s largest engineering school and
                  a pipeline for engineering talent for the world&apos;s leading companies.
                  Ranked among the top 50 engineering schools in the world, our reputation
                  for excellence is built on the foundation of co-op education and a bold
                  history of innovation. We are renowned as a university that embraces
                  differentiation, named by Maclean&apos;s as Canada&apos;s most
                  innovative university for 26 straight years.
                </p>
                <p className="content-text">
                  Waterloo Engineering offers 15 bachelor degree programs,
                  including degrees in emerging multidisciplinary areas
                  such as architectural engineering, biomedical, mechatronics,
                  nanotechnology and environmental engineering.
                  All undergraduate programs are 100% co-op, with more than
                  7600 co-op positions arranged for students annually. In
                  37 graduate degree programs, our students benefit from a
                  robust and innovative research environment, including 21
                  Canada Research Chairs, over a dozen research centres and
                  institutes, and a unique inventor-owned intellectual property
                  policy. We are proud of our reputation for leadership,
                  innovation, and excellence.
                </p>
              </SponsorLinkWithDesc>
            </Col>
          </Row>

          <Row className="my-4 mx-2 gx-4 justify-content-center text-center">
            <Col lg={{ span: 5 }}>
              <p> </p>
              <SponsorLinkWithDesc logoTier="platinum" image={harwin} link="https://www.harwin.com/">
                <p className="content-text">
                  Since 1952, the de Laszlo family has led Harwin, evolving from a turning facility
                  to a global leader in interconnects. Through innovation, advanced technologies,
                  and exemplary service, Harwin addresses the most demanding connectivity
                  challenges, empowering customers to gain a competitive edge. Our vision is clear:
                  to be the first-choice supplier of mission-critical and high-performance
                  connectivity solutions.
                </p>
                <p className="content-text">
                  Integral to our ongoing success is our strategic investment in human capital.
                  Harwin is deeply committed to cultivating a competent, efficient, and
                  team-oriented workforce. Our comprehensive apprenticeship program not only equips
                  students with internationally recognized engineering qualifications but also
                  provides valuable hands-on experience at our Portsmouth headquarters.
                  As a responsible employer, we also prioritize the welfare of our employees and
                  the broader community, actively operating with a strong commitment to social
                  responsibility and striving to minimize our impact on the planet. Harwin navigates
                  the future with a focus on quality, innovation, and corporate responsibility,
                  ensuring a seamless transition toward a brighter and more connected tomorrow.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="platinum" image={solidworks} link="https://www.solidworks.com/">
                <p className="content-text">
                  Dassault Systèmes SOLIDWORKS Corp. designs and markets 3D
                  software tools, including analysis, design, and product
                  data management software. It is used by over 3.2 million
                  engineers and designers at more than 240,000 companies worldwide.
                  The purpose of Dassault Systèmes is to provide business and
                  people with 3DEXPERIENCE universes to imagine sustainable
                  innovations capable of harmonizing product, nature and life.
                </p>
                <p className="content-text">
                  Dassault  Systèmes is a science-based, innovation-driven,
                  business-minded and long-term-oriented company. The
                  Group&apos;s 17,000  employees and contractors are driven by
                  this ambition. This also translates into a high level of market
                  confidence and trust among our 250,000 enterprise customers in
                  more than 140 countries. We are a European company with a global
                  presence and market reach.
                </p>
                <p className="content-text">
                  What we sell is Dassault  Systèmes&apos; 3DEXPERIENCE, it is a business
                  experience platform. It catalyzes and enables innovation by allowing
                  businesses to connect the dots within and outside a company, from
                  upstream thinking, to design, engineering, manufacturing, sales and
                  marketing all the way to ownership.
                </p>
              </SponsorLinkWithDesc>
            </Col>
          </Row>

          <Content title="GOLD SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 justify-content-center text-center">
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={keysight} link="https://www.keysight.com/us/en/home.html">
                <p className="content-text">
                  At Keysight Technologies, our Mission is simple: You dream and we test.
                  At Keysight, we are driven to deliver breakthrough solutions and trusted
                  insight in electronic design, test, manufacture, and optimization to help
                  customers accelerate the innovations that connect and secure the world.
                  Our solutions help our customers innovate in 5G, automotive, Internet of Things,
                  network security, and more.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={liftwerx} link="https://liftwerx.com/">
                <p className="content-text">
                  LiftWerx is a specialized wind energy contractor, solely focused on large
                  corrective repairs. LiftWerx offers alternative lifting services to exchange
                  and repair gearboxes, generators, blades, and fully-assembled rotors using a
                  variety of specialized up-tower lifting devices. We do our work with the right
                  people, tools, and crane-less technology to deliver the best possible service at
                  the highest quality, while minimizing cost and disruption which is often
                  associated with crane work.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={ansys} link="https://www.ansys.com/">
                <p className="content-text">
                  Founded in 1970, ANSYS specializes in engineering simulation with a team of
                  nearly 4,000 skilled professionals. Our experts, including M.S. and Ph.D.-level
                  engineers, focus on finite element analysis, computational fluid dynamics,
                  electronics, semiconductors, embedded software, and design optimization.
                  Recognized as one of the world&apos; most innovative companies, ANSYS has been
                  dedicated to engineering simulation for over 45 years. We develop and support
                  simulation software for predicting product designs&apos; real-world behaviour.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={dxengineering} link="https://www.dxengineering.com/">
                <p className="content-text">
                  At DX Engineering, Amateur Radio is what we know. We understand your every need
                  for top-performing and reliable products, and it&apos;s impossible to overstate
                  the importance of filling those needs. Whether it&apos;s DXing, Contesting or
                  just plain everyday operating, we strive to develop products that fill a specific
                  need, products that are reliable, fully tested, and represent the best value for
                  your money. Anything we design and build offers you proven, measurable benefits.
                </p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={linde} link="https://www.linde.com/">
                <p className="content-text">
                  Linde is a leading global industrial gases and engineering company with 2022
                  sales of $33 billion. We live our mission of making our world more productive
                  every day by providing high-quality solutions, technologies and services which
                  are making our customers more successful and helping to sustain, decarbonize and
                  protect our planet. Our company serves a variety of end markets such as
                  chemicals & energy, food & beverage, electronics, healthcare, manufacturing,
                  metals and mining.
                </p>
              </SponsorLinkWithDesc>
            </Col>
          </Row>

          {/* Silver Sponsors */}
          <Content title="SILVER SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-2 mx-2 gx-4 justify-content-center text-center" style={{ display: 'float' }}>
            <Col md="auto" style={{ float: 'center' }}>
              <SponsorLinkWithDesc logoTier="silver" image={mef} link="https://uwaterloo.ca/math-endowment-fund/" />
            </Col>
            <Col md="auto" style={{ float: 'center' }}>
              <SponsorLinkWithDesc logoTier="silver" image={swagelok} link="http://www.swagelok.com/en" />
            </Col>
            <Col md="auto" style={{ float: 'center' }}>
              <SponsorLinkWithDesc logoTier="silver" image={ieee} link="https://www.ieee.org/" />
            </Col>
            <Col md="auto" style={{ float: 'center' }}>
              <SponsorLinkWithDesc logoTier="silver" image={moderncrane} link="https://moderncrane.ca/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={bomist} link="https://bomist.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={inteliheat} link="https://www.inteliheat.com/" />
            </Col>
          </Row>

          <Row className="my-2 mx-2 gx-4 justify-content-center text-center" style={{ display: 'float' }}>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={customClothes} link="https://customclothes.ca/" />
            </Col>
            <Col md="auto" style={{ float: 'center' }}>
              <SponsorLinkWithDesc logoTier="silver" image={pelican} link="https://www.pelican.com/ca/en/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={rdx} link="https://www.reactiondynamics.space/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={standfordfleming} link="https://uwaterloo.ca/sandford-fleming-foundation/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={teamgantt} link="https://www.teamgantt.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="silver" image={jr} link="https://jrsecurity.ca/" />
            </Col>
          </Row>

          {/* Bronze Sponsors */}
          <p> </p>
          <Content title="BRONZE SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center" style={{ display: 'float' }}>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="bronze" image={ceno360} link="https://www.ceno360.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="bronze" image={kwsewingmachine} link="https://www.kwsewingmachines.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="bronze" image={rutland} link="https://rutland.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="bronze" image={waterlooElectroplating} link="https://www.google.com/maps/place/Waterloo+Electroplating+%26+Metal+Finishing+Inc/@43.5017069,-80.5494139,15z/data=!4m2!3m1!1s0x0:0x91bf0e1ff7c624cf?sa=X&ved=2ahUKEwiv5PTJ5NT5AhUEFFkFHd5bAH4Q_BJ6BAg6EAU" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc logoTier="bronze" image={acornFireSafety} link="https://www.acornfire.ca/" />
            </Col>
          </Row>

          {/* Previous Sponsors */}
          <Content title="PREVIOUS SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center">
            {/* ROW 1 BEGINS HERE */}
            <Col md="auto">
              <SponsorLinkWithDesc image={nationalInstruments} link="http://www.ni.com/en-us.html" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={stratasys} link="http://www.stratasys.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={cimetrix} link="http://www.cimetrixsolutions.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={Bombardier} link="http://www.bombardier.com/en/aerospace.html" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={BJ} link="https://bjphoto.net/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={qnx} link="http://www.qnx.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={futureElectronics} link="http://www.futureelectronics.com/en/company-information/about-future-electronics/FutureConnectivitySolutions/Pages/FutureConnectivitySolutions.aspx" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={kerbalSpaceProgram} link="https://kerbalspaceprogram.com/en/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={Aversan} link="http://www.aversan.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={prattAndWhitney} link="http://www.pwc.ca/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={shelterlogic} link="https://shelterlogic.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={richardDudgeon} link="https://dudgeonjacks.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={princessAuto} link="http://www.princessauto.com/" />
            </Col>

            {/* ROW 2 BEGINS HERE */}
            <Col md="auto">
              <SponsorLinkWithDesc image={waterlooEngMechanical} link="uwaterloo.ca/mechanical-mechatronics-engineering/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={bayAreaCircuits} link="https://bayareacircuits.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={chemroy} link="http://chemroy.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={ublox} link="https://www.u-blox.com/en" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={proto3000} link="http://proto3000.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={fxWorks} link="http://www.fxworxinc.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={duttonLainson} link="https://www.dutton-lainson.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={digi} link="https://www.digi.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={ferrotec} link="https://www.ferrotec.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={hatch} link="https://www.hatch.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={BGF} link="http://www.bgf.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={aircraftSpruce} link="https://www.aircraftspruce.ca/" />
            </Col>

            {/* ROW 3 BEGINS HERE */}
            <Col md="auto">
              <SponsorLinkWithDesc image={hickoryHill} link="https://www.hickory-hills.ca/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={mitutoyo} link="https://www.mitutoyo.ca/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={textreme} link="http://www.textreme.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={misumi} link="https://us.misumi-ec.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={searlesSurveying} link="https://searlessurveying.ca/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={firecam} link="https://firecam.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={airtech} link="https://www.airtechintl.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={msam} link="https://msam-uwaterloo.ca" />
            </Col>

            {/* ROW 4 BEGINS HERE */}
            <Col md="auto">
              <SponsorLinkWithDesc image={ariss} link="https://arissbrospropane.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={bigredbee} link="https://shop.bigredbee.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={broadcom} link="https://www.broadcom.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={eljen} link="https://eljentechnology.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={ereztech} link="https://ereztech.com/ereztech-custom-synthesis/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={robotshop} link="https://www.robotshop.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={triumph} link="https://www.triumphtool.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={mrc} link="https://www.mrcwireless.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={engsoc} link="https://www.engsoc.uwaterloo.ca/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={AandP} link="http://www.braider.com/" />
            </Col>
            <Col md="auto">
              <SponsorLinkWithDesc image={olin} link="https://olin.com/" />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Sponsors;
