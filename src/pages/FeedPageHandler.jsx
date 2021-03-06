import superagentPromise from 'superagent-promise';
import superagent from 'superagent';
// import superagent from 'superagent/lib/client';
import React, { Component } from 'react';

import FeedPageLoading from './FeedPageLoading';

const agent = superagentPromise(superagent, Promise);

import FeedPage from './FeedPage';

export default class FeedPageHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedItems: [],
    };
  }

  componentDidMount() {
    agent('GET', 'https://aboutblank-server.herokuapp.com/api/v2/feeds')
      .end()
      .then((response) => {
        this.setState({
          feedItems: this.processFeedItems(response.body),
        });
      });
  }

  render() {
    if (this.state.feedItems.length === 0) {
      return <FeedPageLoading />;
    }
    return <FeedPage feedItems={this.state.feedItems} />;
  }

  processFeedItems(body) {
    return Object.keys(body)
      .filter(key => /events/.test(key))
      .map(key => body[key].map(feedItem => Object.assign({}, feedItem, { type: key })))
      .reduce((memo, feedItems) => {
        return [...memo, ...feedItems];
      }, []).sort((a, b) => (new Date(a.happened_at).getTime() / 1000) - (new Date(b.happened_at).getTime() / 1000))
      .reverse();
  }
}
