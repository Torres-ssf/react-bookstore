import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <h1 className="logo">Bookstore CMS</h1>
      <button className="header-button" type="button">Books</button>
      <button className="header-button" type="button">Categories</button>
    </header>
  )
}

export default Header;
