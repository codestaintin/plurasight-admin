import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import Course from './components/Courses/CoursesPage';
import Header from './components/commons/Header';
import './styles/index.scss';

/**
 *
 * @function App
 *
 * @returns {JSX}
 */
const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={Course} />
    </Fragment>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('root'));
