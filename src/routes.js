import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Root from './Root';
import AboutPage from './pages/AboutPage';
import FeedPage from './pages/FeedPage';
import ProjectsPage from './pages/ProjectsPage';

export default(
  <Route path="/" component={Root}>
    <Route path="about" component={AboutPage} />
    <Route path="feed" component={FeedPage} />
    <Route path="projects" component={ProjectsPage} />
    <IndexRedirect to="/about" />
  </Route>
);
