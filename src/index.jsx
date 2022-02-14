import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes as Switch,
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Page from './components/Page';
import Home from './components/routes/Home';
import Join from './components/routes/Join';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route
        path="/"
        element={<Page title="Home"><Home /></Page>}
      />
      <Route
        path="/join"
        element={<Page title="Join"><Join /></Page>}
      />
    </Switch>
    <Footer />
  </BrowserRouter>,

  document.getElementById('root'),
);
