import React, { Component } from 'react';
import MainPageLayout from '../layouts/MainPageLayout';

export default class AboutPage extends Component {
  render() {
    return (
      <MainPageLayout className="AboutPage">
        <section role="main">
          <p>about</p>
        </section>
      </MainPageLayout>
    );
  }
}
