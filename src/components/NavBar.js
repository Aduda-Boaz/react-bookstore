import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="Navbar">
      <nav className="Nav-header">
        <h1 className="Nav-logo">
          <NavLink to="/bookstore/" rel="noopener noreferrer">
            Bookstore CMS
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/" rel="noopener noreferrer">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories/" rel="noopener noreferrer">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
