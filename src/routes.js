import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Root from './Root';
import AboutPage from './pages/AboutPage';
import FeedPageHandler from './pages/FeedPageHandler';
import ProjectsPage from './pages/ProjectsPage';

export default(
  <Route path="/" component={Root}>
    <Route path="about" component={AboutPage} />
    <Route path="feed" component={FeedPageHandler} />
    <Route path="projects" component={ProjectsPage} />
    <IndexRedirect to="/about" />
  </Route>
);
