import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

  const {title, author, category, id, deleteHandler} = props;

  return (
    <div className="book-container">
      <div className="book-info">
        <header>
          <span className="category">{category}</span>
          <h3>{title}</h3>
          <span className="author">{author}</span>
        </header>
        <footer className="bottom-container">
          <button className="book-button" type="button">Comments</button>
          <span className="divider" />
          <button className="book-button" onClick={() => deleteHandler(id)} type="button">Remove</button>
          <span className="divider" />
          <button className="book-button" type="button">Edit</button>
        </footer>
      </div>
      <div className="display-progress">
        <svg>
          <circle className="progress-circle" cx="30" cy="30" r="30" />
          <circle className="progress-circle" cx="30" cy="30" r="30" />
        </svg>
        <div className="percent-container">
          <span className="number">50&#37;</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <span className="divider" />
      <div className="update-progress">
        <span className="page-label">Current page</span>
        <span className="page">Page 200 of 410</span>
        <button className="update-btn">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Book;
