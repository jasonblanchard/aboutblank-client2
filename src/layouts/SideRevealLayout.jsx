import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './SideRevealLayout.scss';

export default class SideRevealLayout extends Component {
  render() {
    const className = classNames('SideRevealLayout', `SideRevealLayout-animate-${this.props.direction}`);
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="SideRevealLayout"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}
        transitionAppear
        role="main"
        className={className}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}

SideRevealLayout.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
