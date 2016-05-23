import React, { Component, PropTypes } from 'react';

export default class FeedPage extends Component {
  render() {
    return (
      <section>
        {this.props.feedItems.map(this.renderFeedItem)}
      </section>
    );
  }

  renderFeedItem(feedItem, index) {
    return (
      <div key={index}>
        {feedItem.title}
      </div>
    );
  }
}

FeedPage.propTypes = {
  feedItems: PropTypes.array,
};
