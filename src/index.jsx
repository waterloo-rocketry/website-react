import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Page from './components-new/Page';
import Redirect from './components/Redirect/Redirect';

// pages
import Home from './routes/Home';
import Competition from './routes/Competition';
import Join from './routes/Join';
import Awards from './routes/Awards';

import Rockets from './routes/Rockets';
import Sponsors from './routes/Sponsors';
import Subsystems from './routes/Subsystems';
import Team from './routes/Team';
import Outreach from './routes/Outreach';
import Contact from './routes/Contact';
import Documentation from './routes/Documentation';

import Footer from './components/Footer/Footer';

import Aurora from './routes/rocketPages/Aurora';
import Borealis from './routes/rocketPages/Borealis';
import LeviathanOfTheSky from './routes/rocketPages/LeviathanOfTheSky';
import KrakenOfTheSky from './routes/rocketPages/KrakenOfTheSky';
import SharkOfTheSky from './routes/rocketPages/SharkOfTheSky';
import UnexplodedOrdnance from './routes/rocketPages/UnexplodedOrdnance';
import Vidar3 from './routes/rocketPages/Vidar3';
import Vidar2 from './routes/rocketPages/Vidar2';
import Vidar from './routes/rocketPages/Vidar';
import SilverBrant from './routes/rocketPages/SilverBrant';
import Eridani from './routes/rocketPages/Eridani';
import WRT1 from './routes/rocketPages/WRT1';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import HomeNew from './routes-new/HomeNew';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={<Page title="Home"><Home /></Page>}
        />
        <Route
          exact
          path="sponsorship"
          element={<Redirect url={`${window.location.origin}/pdfs/sponsorship_package2026.pdf`} />}
        />
        <Route
          exact
          path="competition"
          element={<Page title="Competition"><Competition /></Page>}
        />
        <Route
          exact
          path="documentation"
          element={<Page title="Documentation"><Documentation /></Page>}
        />
        <Route
          exact
          path="join"
          element={<Page title="Join Us"><Join /></Page>}
        />
        <Route
          exact
          path="rockets"
          element={<Page title="Rockets"><Rockets /></Page>}
        />
        <Route
          exact
          path="rockets/aurora"
          element={<Page title="Aurora"><Aurora /></Page>}
        />
        <Route
          exact
          path="rockets/borealis"
          element={<Page title="Borealis"><Borealis /></Page>}
        />
        <Route
          exact
          path="rockets/lots"
          element={<Page title="Leviathan Of The Sky"><LeviathanOfTheSky /></Page>}
        />
        <Route
          exact
          path="rockets/kots"
          element={<Page title="Kraken Of The Sky"><KrakenOfTheSky /></Page>}
        />
        <Route
          exact
          path="rockets/sots"
          element={<Page title="Shark Of The Sky"><SharkOfTheSky /></Page>}
        />
        <Route
          exact
          path="rockets/uxo"
          element={<Page title="Unexploded Ordnance"><UnexplodedOrdnance /></Page>}
        />
        <Route
          exact
          path="rockets/vidar3"
          element={<Page title="Vidar III"><Vidar3 /></Page>}
        />
        <Route
          exact
          path="rockets/vidar2"
          element={<Page title="Vidar II"><Vidar2 /></Page>}
        />
        <Route
          exact
          path="rockets/vidar"
          element={<Page title="Vidar"><Vidar /></Page>}
        />
        <Route
          exact
          path="rockets/silverbrant"
          element={<Page title="Silver Brant"><SilverBrant /></Page>}
        />
        <Route
          exact
          path="rockets/eridani"
          element={<Page title="Eridani"><Eridani /></Page>}
        />
        <Route
          exact
          path="rockets/wrt1"
          element={<Page title="WRT1"><WRT1 /></Page>}
        />
        <Route
          exact
          path="sponsors"
          element={<Page title="Sponsors"><Sponsors /></Page>}
        />
        <Route
          exact
          path="team"
          element={<Page title="Team"><Team /></Page>}
        />
        <Route
          exact
          path="subsystems"
          element={<Page title="Subsystems"><Subsystems /></Page>}
        />
        <Route
          exact
          path="awards"
          element={<Page title="Awards"><Awards /></Page>}
        />
        <Route
          exact
          path="outreach"
          element={<Page title="Outreach"><Outreach /></Page>}
        />
        <Route
          exact
          path="contact"
          element={<Page title="Contact"><Contact /></Page>}
        />
        <Route
          exact
          path="home-new"
          element={<Page title="Home NEW"><HomeNew /></Page>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
