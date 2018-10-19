import React from 'react';
import { shape, arrayOf, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 *
 * @function Header
 *
 * @returns {JSX}
 */
const Header = ({ courses }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom_nav">
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/courses">
          Courses <span className="badge badge-light">{courses.length}</span>
        </Link>
      </li>
    </ul>
  </nav>
);

Header.propTypes = {
  courses: arrayOf(shape({}))
};

const mapStateToProps = ({ allCourses }) => ({
  courses: allCourses.courses
});

export default connect(mapStateToProps)(Header);
