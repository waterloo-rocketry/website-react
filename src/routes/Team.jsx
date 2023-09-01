import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CoverPhoto from '../components/CoverPhoto/CoverPhoto';
import Content from '../components/Content/Content';
import MemberImage from '../components/MemberImage/MemberImage';

// Members
import teamCoverImage from '../img/teams/team-win-min.jpg';
import AaronL from '../img/teams/aaronl-min.jpg';
import ABMH from '../img/teams/abm.JPG';
import AdamL from '../img/teams/adaml-min.jpg';
import Anastasia from '../img/teams/anastasia.jpg';
import Andre from '../img/teams/andre-min.jpg';
import Artem from '../img/teams/artem-min.jpg';
import Casey from '../img/teams/casey.jpg';
import ChamathW from '../img/teams/chamath-min.jpg';
import Charlie from '../img/teams/charlie-min.jpg';
import ChrisSankey from '../img/teams/chriss-min.jpg';
import Davis from '../img/teams/davis.jpg';
import Dawson from '../img/teams/dawson-min.jpg';
import DelaneyD from '../img/teams/delaney-min.jpg';
import Elias from '../img/teams/elias.jpg';
import Evan from '../img/teams/evan.jpg';
import FrancisY from '../img/teams/francis-min.jpg';
import Gavin from '../img/teams/gavin-min.jpg';
import JackC from '../img/teams/jack.jpg';
import Jared from '../img/teams/jared-min.jpg';
import Jason from '../img/teams/jason.jpg';
import Jerry from '../img/teams/jerry.jpg';
import Joe from '../img/teams/joe.jpg';
import JoelG from '../img/teams/joel-min.jpg';
import Kasia from '../img/teams/kasia.jpg';
import KaveeshanT from '../img/teams/kaveeshan-min.jpg';
import KavinS from '../img/teams/kavin-min.jpg';
import KimiL from '../img/teams/kimi-min.jpg';
import KyleT from '../img/teams/kyle-min.jpg';
import LanaT from '../img/teams/lana-min.jpg';
import Mabel from '../img/teams/mabel.jpg';
import Makis from '../img/teams/makis.jpg';
import Matthew from '../img/teams/matthew.jpg';
import Matti from '../img/teams/matti-min.jpg';
import Michael from '../img/teams/michael-min.jpg';
import Nahvid from '../img/teams/nahvid.jpg';
import Owen from '../img/teams/owen.jpg';
import Ozayr from '../img/teams/ozayr.jpg';
import Randy from '../img/teams/randy.jpg';
import Rida from '../img/teams/rida.jpg';
import RioL from '../img/teams/rio-min.jpg';
import RobertC from '../img/teams/robert-min.jpg';
import RomanK from '../img/teams/roman.jpg';
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
          <MemberImage image={JackC} name="Jack Christensen" descriptor="Team Co-Lead" />
          <MemberImage image={Matthew} name="Matthew Gordan" descriptor="Safety Captain/Propulsion" />
          <MemberImage image={Rida} name="Rida Sayed" descriptor="Safety Captain" />
          <MemberImage image={AaronL} name="Aaron Leszkowiat" descriptor="Hybrid Propulsion Lead" />
          <MemberImage image={ZachariahM} name="Zachariah Mears" descriptor="Senior Member" />

          <MemberImage image={ABMH} name="ABM Hussein" descriptor="Liquid Propulsion Lead" />
          <MemberImage image={Jared} name="Jared Watson" descriptor="Electrical" />
          <MemberImage image={LanaT} name="Lana Tomlin" descriptor="Payload/Electrical" />

          <MemberImage image={FrancisY} name="Francis Yao" descriptor="Airframe Lead/Payload/Launch Tower" />
          <MemberImage image={ChamathW} name="Chamath Wijesekera" descriptor="Software/Electrical" />
          <MemberImage image={ChrisSankey} name="Chris Sankey" descriptor="Recovery Lead" />
          <MemberImage image={KavinS} name="Kavin Satheeskumar" descriptor="Software Lead" />
          <MemberImage image={Michael} name="Michael Zhou" descriptor="Propulsion Fluid Systems" />
          <MemberImage image={Gavin} name="Gavin Liu" descriptor="Airframe" />

          <MemberImage image={RobertC} name="Robert Cai" descriptor="Software/Payload" />
          <MemberImage image={RioL} name="Rio Liu" descriptor="Electrical" />
          <MemberImage image={Jerry} name="Jerry Lu" descriptor="Propulsion" />
          <MemberImage image={Artem} name="Artem Sotnikov" descriptor="Recovery" />
          <MemberImage image={Randy} name="Randy Dakhil" descriptor="Payload/Electrical" />
          <MemberImage image={JoelG} name="Joel Godard" descriptor="Airframe" />

          <MemberImage image={KimiL} name="Kimi Liang" descriptor="Airframe" />
          <MemberImage image={Nahvid} name="Nahvid Zolfaghari" descriptor="Infrastructure Lead/Airframe" />
          <MemberImage image={Joe} name="Joe Dolina" descriptor="Payload Lead" />
          <MemberImage image={Xavier} name="Xavier Rayes" descriptor="Propulsion/Infrastructure" />
          <MemberImage image={StefanA} name="Stefan Arroyo-Cottier" descriptor="Recovery" />
          <MemberImage image={Andre} name="Andre Arroyo-Cottier" descriptor="Propulsion" />

          <MemberImage image={AdamL} name="Adam Lastovka" descriptor="Propulsion" />
          <MemberImage image={Charlie} name="Charlie Bell" descriptor="Propulsion" />
          <MemberImage image={Tessa} name="Tessa Pugh" descriptor="Integration/Mechanical" />
          <MemberImage image={Elias} name="Elias Kountouris" descriptor="Electrical Co-Lead" />
          <MemberImage image={Owen} name="Owen Henry" descriptor="Payload" />
          <MemberImage image={ThomasF} name="Thomas Fairhead" descriptor="Propulsion/Infrastructure" />

          <MemberImage image={Ozayr} name="Ozayr Raazi" descriptor="Software/Electrical" />
          <MemberImage image={Evan} name="Evan Cheung" descriptor="Software" />
          <MemberImage image={Casey} name="Casey Tsujita" descriptor="Finance Lead" />
          <MemberImage image={ThomasM} name="Thomas Martinez" descriptor="Mechanical/Infrastructure Co-op" />
          <MemberImage image={Anastasia} name="Anastasia Vassos" descriptor="Electrical Co-op" />

          <MemberImage image={Mabel} name="Mabel Aung" descriptor="Propulsion/Infrastructure" />
          <MemberImage image={Davis} name="Davis Liu" descriptor="Electrical" />
          <MemberImage image={Jason} name="Jason Xu" descriptor="Electrical/Software" />
          <MemberImage image={Kasia} name="Kasia-Alexei Delpeche" descriptor="Airframe" />
          <MemberImage image={Makis} name="Makis Lam" descriptor="Airframe" />

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
          <MemberImage status="alum" image={KaveeshanT} name="Kaveeshan Thurairajah" descriptor="Mechanical Eng '23" />
          <MemberImage status="alum" image={ZhenboB} name="Zhen Bo Bian" descriptor="Mechanical Eng '23" />
          <MemberImage status="alum" image={Dawson} name="Dawson Kletke" descriptor="Mechatronics Eng '23" />
          <MemberImage status="alum" image={TeresaT} name="Teresa Tang" descriptor="Nanotechnology Eng '23" />
          <MemberImage status="alum" image={Matti} name="Matti Gencher" descriptor="Mechatronics Eng '23" />
          <MemberImage status="alum" image={KyleT} name="Kyle Tam" descriptor="Mechatronics Eng '23" />
          <MemberImage status="alum" image={DelaneyD} name="Delaney Dyment" descriptor="Physics '23" />
          <MemberImage status="alum" image={TomC} name="Tom Cojocar" descriptor="Mechanical Eng '23" />

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
