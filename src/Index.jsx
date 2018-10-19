import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from './store';
import { loadCourses } from './actions/course/courseActions';
import loadAuthors from './actions/author/authorActions';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CoursePage from './components/Courses/CoursesPage';
import ManageCoursePage from './components/Courses/ManageCoursePage';
import Header from './components/commons/Header';
import NotFound from './components/commons/NotFound';
import './styles/index.scss';

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route exact path="/course/:id" component={ManageCoursePage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));
