import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/Header';

/**
 *
 * @function HomePage
 *
 * @returns {JSX}
 */
const HomePage = () => (
  <React.Fragment>
    <div className="app jumbotron">
      <h1>Plurasight Administration</h1>
      <p>
						React, Redux and React Router in ES6 for ultra-responsive web apps
      </p>
      <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
    </div>
  </React.Fragment>
);

export default HomePage;
