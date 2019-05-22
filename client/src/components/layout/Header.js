import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { heading } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {heading}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todos" className="nav-link">
                <i className="fas fa-plus" /> New Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <i className="fas fa-question" /> Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

Header.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Header;
