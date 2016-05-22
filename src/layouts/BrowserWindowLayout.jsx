import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import './BrowserWindowLayout.scss';

export default class BrowserWindowLayout extends Component {
  render() {
    const className = classNames('BrowserWindowLayout', this.props.className);
    return (
      <div className={className}>
        <div className="BrowserWindowLayout-frame">
          <span />
          <span />
          <span />
        </div>
        {this.props.children}
      </div>
    );
  }
}

BrowserWindowLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
