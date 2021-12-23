import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, BrowserRouter, Routes as Switch,
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Page from './components/Page';
import Home from './components/routes/Home';
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
    </Switch>
    <Footer />
  </BrowserRouter>,

  document.getElementById('root'),
);
