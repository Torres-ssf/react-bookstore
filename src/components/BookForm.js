import React from 'react';
import PropTypes from 'prop-types';
import bookCategories from '../utility/bookCategories';

const BookForm = (props) => {
  const {
    title, author, category, pages,
    pageTitle, submitName,
    changeHandler, submitHandler,
  } = props;
  const options = bookCategories.map(e => <option key={`${e}-`} value={e}>{e}</option>);

  return (
    <div className="form-container">
      <div className="line" />
      <h2>{pageTitle}</h2>
      <form className="form" onSubmit={e => submitHandler(e)}>
        <div className="input-container">
          <input
            id="title"
            className="book-input"
            type="text"
            placeholder="Book name"
            onChange={e => changeHandler(e)}
            value={title}
            required
          />
          <input
            id="author"
            className="book-input"
            type="text"
            placeholder="Book author"
            onChange={e => changeHandler(e)}
            value={author}
            required
          />
          <input
            id="pages"
            className="book-input"
            type="number"
            placeholder="Number of pages"
            onChange={e => changeHandler(e)}
            value={pages}
            required
          />
          <select
            className="category-select"
            id="category"
            onChange={e => changeHandler(e)}
            value={category}
            required
          >
            <option value="" disabled>Category</option>
            {options}
          </select>
        </div>
        <button className="submit-button" type="submit">{submitName}</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default BookForm;
