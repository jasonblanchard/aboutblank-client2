import React, { Component } from 'react';
import BrowserWindowLayout from '../layouts/BrowserWindowLayout.jsx';

import './ProjectsPage.scss';

const projects = [
  {
    title: 'Hamilipsum',
    description: 'Sourced from the writings of Alexander Hamilton, "Hamilipsum" is a lorem ipsum generator for designers and developers.',
    web: 'http://hamilipsum.com/',
    source: 'https://github.com/jasonblanchard/hamilipsum',
    image: '/images/hamilipsum.png',
  },
  {
    title: 'Imperfect Tense',
    description: '"Imperfect Tense" is a short story written by Thom Dunn. We collaborated on a user interface that both simplifies and exaggerates the complex structure of the story using multiple strands of concurrent footnotes.',
    web: 'http://jasonblanchard.github.io/imperfect-tense/',
    source: 'https://github.com/jasonblanchard/imperfect-tense',
    image: '/images/imperfect_tense.png',
  },
  {
    title: 'Writermortis',
    description: 'Writermortis is an online writing game that works like an "exquisite corpse" - one writer begins the story and sends it to other writers. Each subsequent writer can only see the previously written section. Writermortis is currently a Ruby on Rails app but is going through an extensive re-write in Ember.js.',
    web: 'http://www.writermortis.com/',
    source: 'https://github.com/jasonblanchard/writermortis',
    image: '/images/writermortis.png',
  },
];

export default class ProjectsPage extends Component {
  render() {
    return (
      <section>
        {projects.map(this.renderProject)}
      </section>
    );
  }

  renderProject(project, index) {
    return (
      <div className="ProjectsPage-project" key={index}>
        <div className="ProjectsPage-projectScreenshot">
          <BrowserWindowLayout>
            <img alt={`${project.title} screenshot`} src={project.image} />
          </BrowserWindowLayout>
        </div>
        <div className="ProjectsPage-projectDetails">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="ProjectsPage-projectLinks">
            <a className="ProjectsPage-projectLinkWeb" href={project.web} target="blank">web</a> | <a className="ProjectsPage-projectLinkSource" href={project.source} target="blank">source</a>
          </div>
        </div>
      </div>
    );
  }
}
