import React from 'react';
import { Helmet } from 'react-helmet-async';
import './FeaturePage.scss';

export default class FeaurePage extends React.Component {
  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page </title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <div className="features-page">
          <section className="centered">
            <h2>Features</h2>
            <p>Features of boilerplate</p>

            <ul>
              <li>Quick Scaffolding</li>
              <li>SEO</li>
              <li>Instant Feedback</li>
              <li>Loading Bar</li>
              <li>Redux Toolkit state management</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
