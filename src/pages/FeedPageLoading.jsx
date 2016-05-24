import times from 'lodash.times';
import React, { Component } from 'react';

import './FeedPageLoading.scss';

export default class FeedPageLoading extends Component {
  render() {
    return (
      <div>
        <img alt="loading" src="images/ajax-loader.gif" /> Waking up the server and loading feed...
        <div className="FeedPageLoading-shadows">
          {times(20).map(this.renderShadow)}
        </div>
      </div>
    );
  }

  renderShadow(n) {
    return <div key={n} className="FeedPageLoading-shadow" />;
  }
}
