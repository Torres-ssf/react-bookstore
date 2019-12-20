import React from 'react';
import PropTypes from 'prop-types';
import bookCategories from '../utility/bookCategories';

const BookForm = (props) => {
  const { title, author, category, pages, changeHandler, submitHandler } = props;
  const options = bookCategories.map(e => <option key={`${e}-`} value={e}>{e}</option>);

  return (
    <div>
      <h2>Add New Book</h2>
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <label
          className="form-label"
          htmlFor="title"
        >
          Name: 
            <input
            id="title"
            className="book-input"
            type="text"
            placeholder="book name"
            onChange={(e) => changeHandler(e)}
            value={title}
            required
          />
        </label>
        <label
          className="form-label"
          htmlFor="author"
        >
          Author:
            <input
            id="author"
            className="book-input"
            type="text"
            placeholder="book author"
            onChange={(e) => changeHandler(e)}
            value={author}
            required
          />
        </label>
        <label htmlFor="category">
          Category:
            <select
            className="category-select"
            id="category"
            onChange={(e) => changeHandler(e)}
            value={category}
          >
            {options}
          </select>
        </label>
        <button className="submit-button" type="submit">Add New Book</button>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
}

export default BookForm;
