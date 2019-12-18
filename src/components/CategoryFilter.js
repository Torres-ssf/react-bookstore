import React from 'react';
import { bookCategories } from '../utility/bookCategories';

const CategoryFilter = (props) => {

  const { handleFilter } = props;
  const categories = ['All', ...bookCategories];
  const options = categories.map(e => <option key={`${e}-`} value={e}>{e}</option>);

  return (
    <label
      className="filter"
      htmlFor="category-filter"
    >
      Filter books by category:
      <select
        className="category-select"
        id="category-filter"
        onChange={handleFilter}
      >
        {options}
      </select>
    </label>
  );
};

export default CategoryFilter;
