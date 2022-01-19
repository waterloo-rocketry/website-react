import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Page from './components/Page';
import Home from './components/routes/Home';
import Competition from './components/routes/competition';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
