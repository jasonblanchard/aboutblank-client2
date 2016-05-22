import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './SideRevealLayout.scss';

export default class SideRevealLayout extends Component {
  render() {
    const className = classNames('SideRevealLayout', `SideRevealLayout-animate-${this.props.direction}`, this.props.className);
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="SideRevealLayout"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={300}
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
  className: PropTypes.string,
  direction: PropTypes.string,
};
