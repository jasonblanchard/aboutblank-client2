import React, { Component, PropTypes } from 'react';

import MainPageLayout from './layouts/MainPageLayout';
import SideRevealLayout from './layouts/SideRevealLayout';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousPath: null,
    };
  }

  render() {
    return (
      <MainPageLayout className="Root">
        <SideRevealLayout direction={this._getAnimationDirection()}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
          })}
        </SideRevealLayout>
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
