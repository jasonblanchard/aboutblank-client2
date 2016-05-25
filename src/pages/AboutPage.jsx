import React, { Component } from 'react';

import './AboutBlank.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <section className="AboutPage">
        <div className="AboutPage-bio">
          <img alt="profile" src="images/profile.png" />
          <p>I am a Web developer and instructional technologist crafting tools and ideas that empower learners in a networked world.</p>
          <p>Technologies that are exciting to me right now include <strong>Docker</strong>, <strong>Ruby on Rails</strong>, <strong>Node.js</strong> and <strong>React</strong>.</p>
          <p>I'm also a contributer to <a href="https://github.com/gitlabhq/gitlabhq/pulls?q=is%3Apr+author%3Ajasonblanchard+" target="_blank">GitLab</a> and <a href="https://github.com/search?o=desc&q=is%3Apr+author%3Ajasonblanchard&ref=searchresults&s=comments&type=Issues&utf8=%E2%9C%93" target="_blank">other open source projects</a>.</p>
        </div>
        <div className="AboutPage-timeline">
          <iframe src="http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0AlNyK0CWPkZjdE82U1dQNkRKRHdDaldmZUlnZUlBX0E&font=Bevan-PotanoSans&maptype=toner&lang=en&start_at_slide=8&height=650" width="100%" height="650" frameBorder="s0"></iframe>
        </div>
      </section>
    );
  }
}
