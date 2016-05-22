import React, { Component } from 'react';

import './AboutBlank.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <section className="AboutPage">
        <div className="AboutPage-bio">
          <img alt="profile" src="public/profile.png" />
          <p>I am a Web developer and instructional technologist crafting tools and ideas that empower learners in a networked world.</p>
          <p>Technologies that are exciting to me right now include <strong>Node.js</strong> and <strong>React</strong>.</p>
          <p>I'm also a contributer to GitLab and other open source projects.</p>
        </div>
        <div className="AboutPage-timeline">
          <iframe src="http://cdn.knightlab.com/libs/timeline/latest/embed/index.html?source=0AlNyK0CWPkZjdE82U1dQNkRKRHdDaldmZUlnZUlBX0E&font=Bevan-PotanoSans&maptype=toner&lang=en&start_at_slide=8&height=650" width="100%" height="650" frameBorder="s0"></iframe>
        </div>
      </section>
    );
  }
}
