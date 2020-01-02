import React from 'react';
import PropTypes from 'prop-types';
import bookCategories from '../utility/bookCategories';

const CategoryFilter = (props) => {
  const { handleFilter, filter } = props;
  const categories = ['All', ...bookCategories];
  const options = categories.map(e => (
    <option
      key={`${e}-`}
      selected={ filter === e ? true : null}
      value={e}>{e}
    </option>
  ));

  return (
    <div className="book-categorie">
      <label
        className="filter"
        htmlFor="category-filter"
      >
        Filter books by category:
        <br />
        <select
          className="category-select"
          id="category-filter"
          onChange={handleFilter}
        >
          {options}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
