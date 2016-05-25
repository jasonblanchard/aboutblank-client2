import classNames from 'classnames';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';

import './FeedPage.scss';

const feedItemTypes = {
  github_star_events: {
    prefix: 'Starred a repository',
    label: 'Github Stars',
  },
  goodreads_events: {
    prefix: 'Started reading',
    label: 'Goodreads Bookshelf',
  },
  github_project_events: {
    prefix: 'Created a new project',
    label: 'Github Projects',
  },
  delicious_events: {
    prefix: 'Bookmarked',
    label: 'Bookmarks',
  },
};

export default class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
    };

    this.renderFeedItem = this.renderFeedItem.bind(this);
    this.renderFeedFilter = this.renderFeedFilter.bind(this);
  }

  render() {
    return (
      <section className="FeedPage">
        <div className="FeedPage-filterInputs">
          {['all', ...Object.keys(feedItemTypes)].map(this.renderFeedFilter)}
        </div>
        {this._filteredFeedItems().map(this.renderFeedItem)}
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

  renderFeedFilter(filter) {
    const className = classNames('FeedPage-filterLabel', filter);
    return (
      <span className="FeedPage-filterInput" key={filter}>
        <input type="radio" id={filter} name="FeedPage-filter" onChange={this.onChangeFilter.bind(this, filter)} /> <label className={className} htmlFor={filter}>{feedItemTypes[filter] ? feedItemTypes[filter].label : 'All'}</label>
      </span>
    );
  }

  renderImage(feedItem) {
    if (feedItem.image_url === null) return;
    return (
      <img alt={feedItem.title} src={feedItem.image_url} />
    );
  }

  onChangeFilter(filter) {
    this.setState({ filter });
  }

  _filteredFeedItems() {
    if (this.state.filter === 'all') return this.props.feedItems;
    return this.props.feedItems.filter(feedItem => feedItem.type === this.state.filter);
  }
}

FeedPage.propTypes = {
  feedItems: PropTypes.array,
};
