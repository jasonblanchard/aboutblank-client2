import React, { Component } from 'react';
import BrowserWindowLayout from '../layouts/BrowserWindowLayout.jsx';

import './ProjectsPage.scss';

const projects = [
  {
    title: 'Writermortis',
    description: 'Writermortis is an online writing game that works like an "exquisite corpse" - one writer begins the story and sends it to other writers. Each subsequent writer can only see the previously written section. Writermortis is currently a Ruby on Rails app but is going through an extensive re-write in Ember.js.',
    web: 'http://www.writermortis.com/',
    source: 'https://github.com/jasonblanchard/writermortis',
    image: 'public/writermortis.png',
  },
  {
    title: 'Imperfect Tense',
    description: '"Imperfect Tense" is a short story written by Thom Dunn. We collaborated on a user interface that both simplifies and exaggerates the complex structure of the story using multiple strands of concurrent footnotes.',
    web: 'http://jasonblanchard.github.io/imperfect-tense/',
    source: 'https://github.com/jasonblanchard/imperfect-tense',
    image: 'public/imperfect_tense.png',
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
            <a href={project.web}>web</a> | <a href={project.source}>source</a>
          </div>
        </div>
      </div>
    );
  }
}
