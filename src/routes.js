import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import AboutPage from './pages/AboutPage';

export default(
  <Route path="/">
    <Route path="about" component={AboutPage} />
    <IndexRedirect to="/about" />
  </Route>
);
