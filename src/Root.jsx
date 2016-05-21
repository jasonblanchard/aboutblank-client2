import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MainPageLayout from './layouts/MainPageLayout';

import './Root.scss';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousPath: null,
    };
  }

  render() {
    const className = classNames(`Root-animate-${this._getAnimationDirection()}`);
    return (
      <MainPageLayout className={className}>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="Root"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}
          transitionAppear
          role="main"
          className="Root-animation-wrapper"
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
          })}
        </ReactCSSTransitionGroup>
      </MainPageLayout>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({
        previousPath: this.props.location.pathname,
      });
    }
  }

  _getAnimationDirection() {
    const menuPathnames = ['/about', '/feed', '/projects'];
    if (this.props.location.pathname === this.state.previousPath) return null;
    if (menuPathnames.indexOf(this.state.previousPath) < menuPathnames.indexOf(this.props.location.pathname)) {
      return 'left';
    }
    return 'right';
  }
}

Root.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
