import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
      <h1 className="logo">Bookstore CMS</h1>
      <ul className="nav-list">
        <Link className="header-button" to="/">
          <li>Books</li>
        </Link>
        <Link className="header-button" to="/categories">
          <li>Categories</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
