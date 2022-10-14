import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import DividerLine from '../components/DividerLine/DividerLine';
import SponsorLinkWithDesc from '../components/SponsorLinkWithDesc/SponsorLinkWithDesc';

import sponsorCoverImage from '../img/sponsorship/cover_sponsors.jpg';

// all sponsor images...
// PLATINUM
import ansys from '../img/sponsorship/1_platinum_sponsors/ANSYS_Logo.png';
import solidworks from '../img/sponsorship/1_platinum_sponsors/solidworks_logo.png';
import stein from '../img/sponsorship/1_platinum_sponsors/stein_logo.png';
import waterlooEngFaculty from '../img/sponsorship/1_platinum_sponsors/Waterloo_ENG_Faculty_Logo_rgb.png';
import WEEF from '../img/sponsorship/1_platinum_sponsors/WEEF_Logo_yellow.png';

// GOLD
import keysight from '../img/sponsorship/2_gold_sponsors/Keysight.png';

const Sponsors = () => {
  return (
    <>
      <CoverPhoto image={sponsorCoverImage} style={{ height: '35rem', position: '50% 90%' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-4 justify-content-center">
          <Col lg={{ span: 10 }}>
            <Content title="WANT TO BECOME A SPONSOR?">
              <p>
                If you would like to contact us about sponsorship opportunities, check out our
                sponsorship package here and please email us at
                <a href="mailto:contact@waterloorocketry.com"> contact@waterloorocketry.com.</a>
              </p>
            </Content>
          </Col>
        </Row>

        <Row className="my-4 mx-2 gx-4 justify-content-center text-center">
          <Content title="PLATINUM SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 justify-content-center">
            <Col lg={{ span: 6 }}>
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
              <SponsorLinkWithDesc logoTier="platinum" image={ansys} link="https://www.ansys.com/">
                <p className="content-text">
                  Founded in 1970, ANSYS employs nearly 4,000 professionals,
                  many of whom are expert M.S. and Ph.D.-level engineers
                  in finite element analysis, computational fluid dynamics,
                  electronics, semiconductors, embedded software and design
                  optimization. Our exceptional staff is passionate about
                  pushing the limits of world-class simulation technology so our
                  customers can turn their design concepts into successful, innovative
                  products faster and at lower cost. As a measure of our success in
                  attaining these goals, ANSYS has been recognized as one of the world&apos;s
                  most innovative companies by prestigious publications such as Bloomberg
                  Businessweek and FORTUNE magazines.
                </p>
                <p className="content-text">
                  Engineering simulation is our sole focus. For more than 45 years,
                  we have consistently advanced this technology to meet evolving
                  customer needs. ANSYS develops, markets and supports engineering
                  simulation software used to predict how product designs will
                  behave in real-world environments.
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
                <p>Some Text</p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={keysight} link="https://www.keysight.com/us/en/home.html">
                <p>Some Text</p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={keysight} link="https://www.keysight.com/us/en/home.html">
                <p>Some Text</p>
              </SponsorLinkWithDesc>
            </Col>
            <Col lg={{ span: 5 }}>
              <SponsorLinkWithDesc logoTier="gold" image={keysight} link="https://www.keysight.com/us/en/home.html">
                <p>Some Text</p>
              </SponsorLinkWithDesc>
            </Col>
          </Row>

          <Content title="SILVER SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center">
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
          </Row>

          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center">
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
          </Row>

          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center">
            <Col lg={{ span: 3 }}>
              <SponsorLinkWithDesc logoTier="silver" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
          </Row>

          <Content title="BRONZE SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center">
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc logoTier="bronze" image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
          </Row>

          <Content title="PREVIOUS SPONSORS">
            <DividerLine />
          </Content>
          <Row className="my-4 mx-2 gx-4 col-md-12 justify-content-center text-center">
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
            <Col>
              <SponsorLinkWithDesc image={keysight} link="https://www.keysight.com/us/en/home.html" />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Sponsors;
