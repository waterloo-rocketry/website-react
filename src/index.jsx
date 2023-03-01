import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Page from './components/Page';

// pages
import Home from './routes/Home';
import Competition from './routes/Competition';
import Join from './routes/Join';
import Awards from './routes/Awards';

import SharkOfTheSky from './routes/rocketPages/SharkOfTheSky';
// eslint-disable-next-line import/no-named-as-default
import Sponsors from './routes/Sponsors';

import Outreach from './routes/Outreach';

import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/website-react">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={<Page title="Home"><Home /></Page>}
        />
        <Route
          exact
          path="/competition"
          element={<Page title="Competition"><Competition /></Page>}
        />
        <Route
          exact
          path="/join"
          element={<Page title="Join Us"><Join /></Page>}
        />
        <Route
          exact
          path="/sponsors"
          element={<Page title="Sponsors"><Sponsors /></Page>}
        />
        <Route
          exact
          path="/sots"
          element={<Page title="Shark of the Sky"><SharkOfTheSky /></Page>}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/awards"
          element={<Page title="Awards"><Awards /></Page>}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/outreach"
          element={<Page title="Outreach"><Outreach /></Page>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
