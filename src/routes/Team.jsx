import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import MemberImage from '../components/MemberImage/MemberImage';

// Cover
import teamCoverImage from '../img/teams/team-win-min.jpg';

// Members
import AaronL from '../img/teams/aaronl-min.jpg';
import ABMH from '../img/teams/abm.JPG';
import AdamL from '../img/teams/adaml-min.jpg';
import Anastasia from '../img/teams/anastasia.jpg';
import Andre from '../img/teams/andre-min.jpg';
import AnthonyC from '../img/teams/anthonyC.jpg';
import Artem from '../img/teams/artem-min.jpg';
import Casey from '../img/teams/casey.jpg';
import ChamathW from '../img/teams/chamath-min.jpg';
import Charlie from '../img/teams/charlie-min.jpg';
import ChrisSankey from '../img/teams/chriss-min.jpg';
import Davis from '../img/teams/davis.jpg';
import Dawson from '../img/teams/dawson-min.jpg';
import DelaneyD from '../img/teams/delaney-min.jpg';
import DomenicH from '../img/teams/domenicH.jpg';
import Evan from '../img/teams/evan.jpg';
import ElizabethX from '../img/teams/elizabethX.jpg';
import FrancisY from '../img/teams/francis-min.jpg';
import JackC from '../img/teams/jack.jpg';
import Jason from '../img/teams/jason.jpg';
import Jerry from '../img/teams/jerry.jpg';
import JiyaM from '../img/teams/jiyaM.jpg';
import Joe from '../img/teams/joe.jpg';
import JoelG from '../img/teams/joel-min.jpg';
import Kasia from '../img/teams/kasia.jpg';
import KaveeshanT from '../img/teams/kaveeshan-min.jpg';
import KavinS from '../img/teams/kavin-min.jpg';
import KimiL from '../img/teams/kimi-min.jpg';
import LanaT from '../img/teams/lana-min.jpg';
import Mabel from '../img/teams/mabel.jpg';
import Makis from '../img/teams/makis.jpg';
import Matthew from '../img/teams/matthew.jpg';
import Matti from '../img/teams/matti-min.jpg';
import Michael from '../img/teams/michael-min.jpg';
import Nahvid from '../img/teams/nahvid.jpg';
import Owen from '../img/teams/owen.jpg';
import OzayrR from '../img/teams/ozayrR.jpg';
import RichardD from '../img/teams/richardD.jpg';
import Rida from '../img/teams/rida.jpg';
import RioL from '../img/teams/rio-min.jpg';
import RobertC from '../img/teams/robert-min.jpg';
import RomanK from '../img/teams/roman.jpg';
import RyanL from '../img/teams/ryanL.jpg';
import StefanA from '../img/teams/stefana.jpg';
import TeresaT from '../img/teams/teresa-min.jpg';
import Tessa from '../img/teams/tessa.jpg';
import ThomasF from '../img/teams/thomasf.jpg';
import ThomasM from '../img/teams/thomasm.jpg';
import TomC from '../img/teams/tom-min.jpg';
import Xavier from '../img/teams/xavier.jpg';
import ZachariahM from '../img/teams/zach-min.jpg';
import ZhenboB from '../img/teams/zhenbo.jpg';

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
import KyleT from '../img/teams/kyle-min.jpg';
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
          <MemberImage image={RomanK} name="Roman Kobets" title="Team Co-Lead" />
          <MemberImage image={JackC} name="Jack Christensen" title="Team Co-Lead" />
          <MemberImage image={Tessa} name="Tessa Pugh" title="Team Co-Lead" />
          <MemberImage image={Matthew} name="Matthew Gordon" title="Safety Captain/Operations Lead" />
          <MemberImage image={Rida} name="Rida Sayed" title="Safety Captain" />
          <MemberImage image={AaronL} name="Aaron Leszkowiat" title="Senior Member" />
          <MemberImage image={ZachariahM} name="Zachariah Mears" title="Senior Member" />
          <MemberImage image={ABMH} name="ABM Hussein" title="Senior Member" />
          <MemberImage image={LanaT} name="Lana Tomlin" title="Payload/Electrical" />
          <MemberImage image={FrancisY} name="Francis Yao" title="Airframe Lead/Launch Tower" />
          <MemberImage image={ChamathW} name="Chamath Wijesekera" title="Software/Electrical" />
          <MemberImage image={ChrisSankey} name="Chris Sankey" title="Recovery Lead" />
          <MemberImage image={KavinS} name="Kavin Satheeskumar" title="Software/Electrical/Controls" />
          <MemberImage image={Michael} name="Michael Zhou" title="Propulsion Fluid Systems" />
          <MemberImage image={RobertC} name="Robert Cai" title="Software/Flight Dynamics/Controls" />
          <MemberImage image={RioL} name="Rio Liu" title="Electrical" />
          <MemberImage image={Jerry} name="Jerry Lu" title="Propulsion" />
          <MemberImage image={Artem} name="Artem Sotnikov" title="Recovery" />
          <MemberImage image={JoelG} name="Joel Godard" title="Airframe" />
          <MemberImage image={KimiL} name="Kimi Liang" title="Airframe" />
          <MemberImage image={Nahvid} name="Nahvid Zolfaghari" title="Infrastructure Lead/Airframe" />
          <MemberImage image={Joe} name="Joe Dolina" title="Controls Lead" />
          <MemberImage image={Xavier} name="Xavier Rayes" title="Propulsion/Infrastructure" />
          <MemberImage image={StefanA} name="Stefan Arroyo-Cottier" title="Recovery Lead" />
          <MemberImage image={Andre} name="Andre Arroyo-Cottier" title="Propulsion/Payload" />
          <MemberImage image={AdamL} name="Adam Lastovka" title="Propulsion" />
          <MemberImage image={Charlie} name="Charlie Bell" title="Propulsion" />
          <MemberImage image={DomenicH} name="Domenic Hampson" title="Electrical Co-Lead" />
          <MemberImage image={Owen} name="Owen Henry" title="Payload" />
          <MemberImage image={ThomasF} name="Thomas Fairhead" title="Propulsion Lead" />
          <MemberImage image={OzayrR} name="Ozayr Raazi" title="Software Lead" />
          {/* <MemberImage image={KeeganT} name="Keegan Tripp" title="Media Lead" /> */}
          <MemberImage image={Evan} name="Evan Cheung" title="Software" />
          <MemberImage image={Casey} name="Casey Tsujita" title="Finance Lead" />
          <MemberImage image={ThomasM} name="Thomas Martinez" title="Infrastructure/Electrical" />
          <MemberImage image={Anastasia} name="Anastasia Vassos" title="Electrical Co-op" />
          <MemberImage image={Mabel} name="Mabel Aung" title="Propulsion/Infrastructure" />
          <MemberImage image={Davis} name="Davis Liu" title="Electrical" />
          <MemberImage image={Jason} name="Jason Xu" title="Electrical Co-Lead" />
          <MemberImage image={Kasia} name="Kasia-Alexei Delpeche" title="Airframe" />
          <MemberImage image={Makis} name="Makis Lam" title="Airframe" />
          <MemberImage image={JiyaM} name="Jiya Makwana" title="Propulsion" />
          <MemberImage image={RichardD} name="Richard Ding" title="Controls" />
          <MemberImage image={AnthonyC} name="Anthony Chen" title="Software" />
          <MemberImage image={ElizabethX} name="Xiaotong Elizabeth Xiong" title="Controls/Software" />
          {/* <MemberImage image={RyanL} name="Ryan Lau" title="???" /> */}
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
          <MemberImage status="alum" image={KaveeshanT} name="Kaveeshan Thurairajah" title="Mechanical Eng '23" />
          <MemberImage status="alum" image={ZhenboB} name="Zhen Bo Bian" title="Mechanical Eng '23" />
          <MemberImage status="alum" image={Dawson} name="Dawson Kletke" title="Mechatronics Eng '23" />
          <MemberImage status="alum" image={TeresaT} name="Teresa Tang" title="Nanotechnology Eng '23" />
          <MemberImage status="alum" image={Matti} name="Matti Gencher" title="Mechatronics Eng '23" />
          <MemberImage status="alum" image={KyleT} name="Kyle Tam" title="Mechatronics Eng '23" />
          <MemberImage status="alum" image={DelaneyD} name="Delaney Dyment" title="Physics '23" />
          <MemberImage status="alum" image={TomC} name="Tom Cojocar" title="Mechanical Eng '23" />

          <MemberImage status="alum" image={ZacharyT} name="Zachary Teper" title="Electrical Eng '22" />
          <MemberImage status="alum" image={HamzaA} name="Hamza Abuabah" title="Mechanical Eng '22" />
          <MemberImage status="alum" image={EdwardY} name="Edward Yang" title="Mechatronics Eng '22" />
          <MemberImage status="alum" image={ShirleyK} name="Shirley Kong" title="Mechanical Eng '22" />
          <MemberImage status="alum" image={HusseinS} name="Hussein Saafan" title="Chemical Eng '21" />
          <MemberImage status="alum" image={AdamP} name="Adam Paul" title="Computer Eng '21" />
          <MemberImage status="alum" image={JacobD} name="Jacob Deery" title="Mechatronics Eng '21" />

          <MemberImage status="alum" image={AaronM} name="Aaron Morrison" title="Electrical Eng '21" />
          <MemberImage status="alum" image={AlexM} name="Alex Mihaila" title="Mechatronics Eng '20" />
          <MemberImage status="alum" image={StefanM} name="Stefan Martin" title="Mechanical Eng '20" />
          <MemberImage status="alum" image={Vithusan} name="Vithusan Rajkumar" title="Mechanical Eng '20" />
          <MemberImage status="alum" image={DorisJ} name="Doris Jiang" title="Mechanical Eng '20" />
          <MemberImage status="alum" image={NickC} name="Nick Christopher" title="MASc '20; Mech '18" />
          <MemberImage status="alum" image={JustinR} name="Justin Robinson" title="Mechanical Eng '19" />

          <MemberImage status="alum" image={MirandaD} name="Miranda Daly" title="Mechanical Eng '19" />
          <MemberImage status="alum" image={HilbertL} name="Hilbert Li" title="Mechanical Eng '18" />
          <MemberImage status="alum" image={RobinL} name="Robin Liu" title="Mechanical Eng '18" />
          <MemberImage status="alum" image={NinaK} name="Nina Kornilovsky" title="Civil Eng '18" />
          <MemberImage status="alum" image={DavidN} name="David Ng" title="Mechanical Eng '18" />
          <MemberImage status="alum" image={ChrisV} name="Chris Virtue" title="Mechatronics Eng '18" />
          <MemberImage status="alum" image={YashS} name="Yash Sewlani" title="Mechanical Eng '17" />

          <MemberImage status="alum" image={IvanB} name="Ivan Baranov" title="Computer Eng '17" />
          <MemberImage status="alum" image={YiqingW} name="Yiqing Wang" title="Mechanical Eng '16" />
        </Container>
      </Container>
    </>
  );
};

export default Team;
