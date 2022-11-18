import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import DividerLine from '../components/DividerLine/DividerLine';
import MemberImage from '../components/MemberImage/MemberImage';

// Members
import teamCoverImage from '../img/teams/team-win-min.jpg';
import AaronL from '../img/teams/aaronl-min.jpg';
import ABMH from '../img/teams/abm-min.jpg';
import AdamL from '../img/teams/adaml-min.jpg';
import Andre from '../img/teams/andre-min.jpg';
import Artem from '../img/teams/artem-min.jpg';
import ChamathW from '../img/teams/chamath-min.jpg';
import Charlie from '../img/teams/charlie-min.jpg';
import ChrisSankey from '../img/teams/chriss-min.jpg';
import Dawson from '../img/teams/dawson-min.jpg';
import DelaneyD from '../img/teams/delaney-min.jpg';
import Denis from '../img/teams/denis-min.jpg';
import FrancisY from '../img/teams/francis-min.jpg';
import Gavin from '../img/teams/gavin-min.jpg';
import JackC from '../img/teams/jack-min.jpg';
import Jared from '../img/teams/jared-min.jpg';
import JoelG from '../img/teams/joel-min.jpg';
import Joseph from '../img/teams/joseph-min.jpg';
import KaveeshanT from '../img/teams/kaveeshan-min.jpg';
import KavinS from '../img/teams/kavin-min.jpg';
import KimiL from '../img/teams/kimi-min.jpg';
import KyleT from '../img/teams/kyle-min.jpg';
import LanaT from '../img/teams/lana-min.jpg';
import Matti from '../img/teams/matti-min.jpg';
import Michael from '../img/teams/michael-min.jpg';
import RioL from '../img/teams/rio-min.jpg';
import RobertC from '../img/teams/robert-min.jpg';
import RomanK from '../img/teams/roman-min.jpg';
import Saduni from '../img/teams/saduni-min.jpg';
import Sophie from '../img/teams/sophie-min.jpg';
import StefanA from '../img/teams/stefana-min.jpg';
import TeresaT from '../img/teams/teresa-min.jpg';
import TomC from '../img/teams/tom-min.jpg';
import WendiY from '../img/teams/wendi-min.jpg';
import ZachariahM from '../img/teams/zach-min.jpg';
import ZhenboB from '../img/teams/zhenbo-min.jpg';

// Alumni
import AaronM from '../img/teams/aaron-min.jpg';
import AdamP from '../img/teams/adam-min.jpg';
import AlexM from '../img/teams/alex-min.jpg';
import ChrisV from '../img/teams/chris-min.jpg';
import DavidN from '../img/teams/david-min.jpg';
import DorisJ from '../img/teams/doris-min.jpg';
import EdwardY from '../img/teams/edward-min.jpg';
import HamzaA from '../img/teams/hamza-min.jpg';
import HilbertL from '../img/teams/hilbert-min.jpg';
import HusseinS from '../img/teams/hussein-min.jpg';
import IvanB from '../img/teams/ivan-min.jpg';
import JacobD from '../img/teams/jacob-min.jpg';
import JustinR from '../img/teams/justin-min.jpg';
import MirandaD from '../img/teams/miranda-min.jpg';
import NickC from '../img/teams/nick-min.jpg';
import NinaK from '../img/teams/nina-min.jpg';
import RobinL from '../img/teams/robin-min.jpg';
import ShirleyK from '../img/teams/shirley-min.jpg';
import StefanM from '../img/teams/stefan-min.jpg';
import Vithusan from '../img/teams/vithusan-min.jpg';
import YashS from '../img/teams/yash-min.jpg';
import YiqingW from '../img/teams/yiqing-min.jpg';
import ZacharyT from '../img/teams/zachary-min.jpg';

import styles from './css/Team.module.css';

const Team = () => {
  return (
    <>
      <CoverPhoto image={teamCoverImage} style={{ height: '35rem', position: 'center bottom' }} />
      <Container fluid>
        <Row className="my-4 mx-2 gx-4 justify-content-center">
          <Col>
            <Content title="TEAM">
              <p>
                Waterloo Rocketry is a multidisciplinary team with members from Mechanical,
                Mechatronics, Electrical, Computer, Chemical, Systems Design, Nanotechnology,
                Software, and Civil Engineering, as well as from the Science and Mathematics
                faculties.
                Our team members have diverse backgrounds and skillsets ranging from firmware and
                systems programming to structural and thermal analysis, and encompassing everything
                in between.
              </p>
            </Content>
          </Col>
        </Row>

        <Container className={styles.containerFluid} fluid>
          <MemberImage image={RomanK} name="Roman Kobets" descriptor="Team Co-Lead" />
          <MemberImage image={ZachariahM} name="Zachariah Mears" descriptor="Team Co-Lead" />
          <MemberImage image={DelaneyD} name="Delaney Dyment" descriptor="Operations Lead/Team Co-Lead" />
          <MemberImage image={ABMH} name="ABM Hussein" descriptor="Safety Captain/Propulsion Co-Lead" />
          <MemberImage image={TomC} name="Tom Cojocar" descriptor="Propulsion" />
          <MemberImage image={AaronL} name="Aaron Leszkowiat" descriptor="Propulsion" />
          <MemberImage image={KyleT} name="Kyle Tam" descriptor="Payload Co-Lead" />

          <MemberImage image={Matti} name="Matti Gencher" descriptor="Propulsion/Electrical" />
          <MemberImage image={TeresaT} name="Teresa Tang" descriptor="Painting/Propulsion" />
          <MemberImage image={Dawson} name="Dawson Kletke" descriptor="Electrical/Software/Recovery" />
          <MemberImage image={ZhenboB} name="Zhen Bo Bian" descriptor="Propulsion Co-Lead" />
          <MemberImage image={KaveeshanT} name="Kaveeshan Thurairajah" descriptor="Rogallo Researcher" />
          <MemberImage image={Jared} name="Jared Watson" descriptor="Electrical" />
          <MemberImage image={LanaT} name="Lana Tomlin" descriptor="Payload Co-Lead" />

          <MemberImage image={Sophie} name="Sophie Hillcoat" descriptor="Propulsion" />
          <MemberImage image={FrancisY} name="Francis Yao" descriptor="Airframe Lead/Payload" />
          <MemberImage image={ChamathW} name="Chamath Wijesekera" descriptor="Software/Electrical" />
          <MemberImage image={WendiY} name="Wendi Yu" descriptor="Software Lead" />
          <MemberImage image={ChrisSankey} name="Chris Sankey" descriptor="Recovery Lead" />
          <MemberImage image={Saduni} name="Saduni Sumithrarachchige" descriptor="Payload" />
          <MemberImage image={KavinS} name="Kavin Satheeskumar" descriptor="Software/Payload" />

          <MemberImage image={Michael} name="Michael Zhou" descriptor="Infrastructure Lead/Propulsion" />
          <MemberImage image={JackC} name="Jack Christensen" descriptor="Electrical Lead/Software" />
          <MemberImage image={Gavin} name="Gavin Liu" descriptor="Airframe" />
          <MemberImage image={RobertC} name="Robert Cai" descriptor="Software/Payload" />
          <MemberImage image={RioL} name="Rio Liu" descriptor="Electrical" />
          <MemberImage image={Artem} name="Artem Sotnikov" descriptor="Recovery" />
          <MemberImage image={JoelG} name="Joel Godard" descriptor="Airframe" />

          <MemberImage image={KimiL} name="Kimi Liang" descriptor="Airframe" />
          <MemberImage image={Denis} name="Denis Tyan" descriptor="Finance/Infrastructure" />
          <MemberImage image={StefanA} name="Stefan Arroyo-Cottier" descriptor="Recovery" />
          <MemberImage image={Andre} name="Andre Arroyo-Cottier" descriptor="Propulsion" />
          <MemberImage image={AdamL} name="Adam Lastovka" descriptor="Propulsion" />
          <MemberImage image={Charlie} name="Charlie Bell" descriptor="Propulsion" />
          <MemberImage image={Joseph} name="Joseph Ma" descriptor="Member" />
        </Container>

        <Row className="my-4 mx-2 gx-4 justify-content-center">
          <Col>
            <Content title="ALUMNI">
              <p>
                Our success would not have been possible without the efforts of countless alumni.
                Their dedication, leadership, and mentorship have paved the way for the current
                team, and while it would be impossible to list everyone who has played a part in
                our history, we would like to acknowledge those who we can.
              </p>
            </Content>
          </Col>
        </Row>

        <Container className={styles.containerFluid} fluid>
          <MemberImage status="alum" image={ZacharyT} name="Zachary Teper" descriptor="Electrical Eng '22" />
          <MemberImage status="alum" image={HamzaA} name="Hamza Abuabah" descriptor="Mechanical Eng '22" />
          <MemberImage status="alum" image={EdwardY} name="Edward Yang" descriptor="Mechatronics Eng '22" />
          <MemberImage status="alum" image={ShirleyK} name="Shirley Kong" descriptor="Mechanical Eng '22" />
          <MemberImage status="alum" image={HusseinS} name="Hussein Saafan" descriptor="Chemical Eng '21" />
          <MemberImage status="alum" image={AdamP} name="Adam Paul" descriptor="Computer Eng '21" />
          <MemberImage status="alum" image={JacobD} name="Jacob Deery" descriptor="Mechatronics Eng '21" />

          <MemberImage status="alum" image={AaronM} name="Aaron Morrison" descriptor="Electrical Eng '21" />
          <MemberImage status="alum" image={AlexM} name="Alex Mihaila" descriptor="Mechatronics Eng '20" />
          <MemberImage status="alum" image={StefanM} name="Stefan Martin" descriptor="Mechanical Eng '20" />
          <MemberImage status="alum" image={Vithusan} name="Vithusan Rajkumar" descriptor="Mechanical Eng '20" />
          <MemberImage status="alum" image={DorisJ} name="Doris Jiang" descriptor="Mechanical Eng '20" />
          <MemberImage status="alum" image={NickC} name="Nick Christopher" descriptor="MASc '20; Mech '18" />
          <MemberImage status="alum" image={JustinR} name="Justin Robinson" descriptor="Mechanical Eng '19" />

          <MemberImage status="alum" image={MirandaD} name="Miranda Daly" descriptor="Mechanical Eng '19" />
          <MemberImage status="alum" image={HilbertL} name="Hilbert Li" descriptor="Mechanical Eng '18" />
          <MemberImage status="alum" image={RobinL} name="Robin Liu" descriptor="Mechanical Eng '18" />
          <MemberImage status="alum" image={NinaK} name="Nina Kornilovsky" descriptor="Civil Eng '18" />
          <MemberImage status="alum" image={DavidN} name="David Ng" descriptor="Mechanical Eng '18" />
          <MemberImage status="alum" image={ChrisV} name="Chris Virtue" descriptor="Mechatronics Eng '18" />
          <MemberImage status="alum" image={YashS} name="Yash Sewlani" descriptor="Mechanical Eng '17" />

          <MemberImage status="alum" image={IvanB} name="Ivan Baranov" descriptor="Computer Eng '17" />
          <MemberImage status="alum" image={YiqingW} name="Yiqing Wang" descriptor="Mechanical Eng '16" />
        </Container>
      </Container>
    </>
  );
};

export default Team;
