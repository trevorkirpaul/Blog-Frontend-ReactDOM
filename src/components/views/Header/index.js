import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import './style.css';

// placeholder var to determine auth, until we set up redux
const isAuth = false;

// if user is not authenticated, we'll pass these in to create links
const authFalse = [
  { url: '/sign-up', text: 'Sign Up', key: uuid() },
  { url: '/sign-in', text: 'Sign In', key: uuid() },
];

// if user is authenticated
const authTrue = [
  { url: '/dashboard', text: 'Dashboard', key: uuid() },
  { url: '/sign-out', text: 'Sign Out', key: uuid() },
];

// create a nav link
const NavLink = ({ url, text }) => (
  <li>
    <Link to={url}>
      <span>{text}</span>
    </Link>
  </li>
);

class Header extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navLogo">
          <Link to="/">
            <span>Life Story</span>
          </Link>
        </div>
        <ul className="navList">
          {isAuth
            ? authTrue.map(link => (
              <NavLink key={link.key} url={link.url} text={link.text} />
            ))
            : authFalse.map(link => (
              <NavLink key={link.key} url={link.url} text={link.text} />
            ))}
        </ul>
      </div>
    );
  }
}

export default Header;
