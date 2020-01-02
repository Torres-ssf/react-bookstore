import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { setFilterDisplay } = props;

  return (
    <header className="page-header">
      <h1 className="logo">Bookstore CMS</h1>
      <button
        className="header-button"
        type="button"
        onClick={() => setFilterDisplay(false)}
      >
        Books
      </button>
      <button
        className="header-button"
        type="button"
        onClick={() => setFilterDisplay(true)}
      >
        Categories
      </button>
    </header>
  );
};

Header.propTypes = {
  setFilterDisplay: PropTypes.func.isRequired,
};

export default Header;
