import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 * @function Header
 *
 * @returns {JSX}
 */
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom_nav">
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/courses">Courses</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
