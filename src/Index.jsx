import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from './store';
import loadCourses from './actions/course/courseActions';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import Course from './components/Courses/CoursesPage';
import Header from './components/commons/Header';
import './styles/index.scss';

store.dispatch(loadCourses());
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
ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
