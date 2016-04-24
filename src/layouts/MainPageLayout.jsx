import { Link } from 'react-router';
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import './MainPageLayout.scss';

export default class MainPageLayout extends Component {
  render() {
    const className = classNames('MainPageLayout', this.props.className);
    return (
      <div className={className}>
        <header className="MainPageLayout-header">
          <div className="MainPageLayout-branding">
            <h1>About:Blank</h1>
            <p className="MainPageLayout-subtitle">jason:blanchard web:dev ed:tech</p>
          </div>
          <div className="MainPageLayout-links">
            <a className="MainPageLayout-githubLink" href="https://github.com/jasonblanchard" target="_blank">
              <span className="sr-only">GitHub</span>
            </a>
            <a className="MainPageLayout-twitterLink" href="https://twitter.com/about__blank" target="_blank">
              <span className="sr-only">Twitter</span>
            </a>
            <a className="MainPageLayout-linkedinLink" href="https://www.linkedin.com/in/jasonwblanchard" target="_blank">
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </header>
        <nav className="MainPageLayout-nav">
          <Link to="/about" activeClassName="active">about</Link>
          <Link to="/feed" activeClassName="active">feed</Link>
          <Link to="/projects" activeClassName="active">projects</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

MainPageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
