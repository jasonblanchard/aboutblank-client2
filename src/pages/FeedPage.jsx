import classNames from 'classnames';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';

import './FeedPage.scss';

const feedItemTypes = {
  github_star_events: {
    prefix: 'Starred a repository',
  },
  goodreads_events: {
    prefix: 'Started reading',
  },
  github_project_events: {
    prefix: 'Created a new project',
  },
  delicious_events: {
    prefix: 'Bookmarked',
  },
};

export default class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.renderFeedItem = this.renderFeedItem.bind(this);
  }

  render() {
    return (
      <section>
        {this.props.feedItems.map(this.renderFeedItem)}
      </section>
    );
  }

  renderFeedItem(feedItem, index) {
    const className = classNames('FeedPage-feedItem', feedItem.type);
    return (
      <div className={className} key={index}>
        <div>
          {feedItemTypes[feedItem.type].prefix} <a href={feedItem.url} target="_blank">{feedItem.title}</a> {moment(feedItem.happened_at).fromNow()}
        </div>
        {this.renderImage(feedItem)}
      </div>
    );
  }

  renderImage(feedItem) {
    if (feedItem.image_url === null) return;
    return (
      <img alt={feedItem.title} src={feedItem.image_url} />
    );
  }
}

FeedPage.propTypes = {
  feedItems: PropTypes.array,
};
