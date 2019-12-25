import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    index, title, author, pages, category, id,
    progress, updateProgress, deleteHandler,
  } = props;

  const [updateForm, toggleForm] = useState(false);

  const displayNone = updateForm ? { display: 'flex' } : { display: 'none' };

  const percentCompleted = Math.floor(progress / pages * 100);
  const progressPercent = Math.round((1 - (progress / pages)) * 189);
  const progressStyle = {
    stroke: percentCompleted === 100 ? '#32A745' : '#3481c9',
    strokeDashoffset: `${progressPercent}`,
  };

  const [inputProgress, inputProgressUpdate] = useState(progress);

  const inputProgressHandler = (e) => {
    inputProgressUpdate(e.target.value);
  };

  const updateProgressHandler = (e) => {
    toggleForm(!updateForm);
    updateProgress(e, index, inputProgress);
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <header>
          <span className="category">{category}</span>
          <h3 className="title" title={title}>{title}</h3>
          <span className="author">{author}</span>
        </header>
        <footer className="bottom-container">
          <button className="book-button" type="button">Edit</button>
          <span className="divider" />
          <button className="book-button" onClick={() => deleteHandler(id)} type="button">Remove</button>
        </footer>
      </div>
      <span className="divider" />
      <div className="display-progress">
        <svg>
          <circle className="progress-circle" cx="30" cy="30" r="30" />
          <circle className="progress-circle" style={progressStyle} cx="30" cy="30" r="30" />
        </svg>
        <div className="percent-container">
          <span className="number">
            {percentCompleted}
            &#37;
          </span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <span className="divider" />
      <div className="update-progress">
        <span className="page-label">Current page</span>
        <span className="page">
          Page
          {progress}
          of
          {pages}
        </span>
        <form
          className="update-page"
          style={displayNone}
          onSubmit={updateProgressHandler}
        >
          <input
            type="number"
            placeholder="pages"
            value={inputProgress}
            onChange={inputProgressHandler}
            min="1"
            max={pages}
          />
          <button type="submit">Update</button>
        </form>
        <button
          className="update-btn"
          onClick={() => toggleForm(!updateForm)}
          type="button"
        >
          Update progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  updateProgress: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Book;
