import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    index, title, author, pages, category, id,
    progress, updateProgress, deleteHandler,
  } = props;

  const [updateForm, toggleForm] = useState(false);
  const [inputProgress, inputProgressUpdate] = useState(progress);
  const [deleteAnimClass, toggleDeleteAnim] = useState('');

  const displayNone = updateForm ? { display: 'flex' } : { display: 'none' };

  const percentCompleted = Math.floor(progress / pages * 100);
  const progressPercent = Math.round((1 - (progress / pages)) * 189);
  const strokeColor = percentCompleted === 100 ? '#32A745' : '#3481c9';
  const progressStyles = { transition: 'stroke-dashoffset 500ms linear' }

  const updateProgressHandler = (e) => {
    toggleForm(!updateForm);
    updateProgress(e, id, index, parseInt(inputProgress, 10));
  };

  const animationEnded = (e) => {
    const { animationName } = e;

    switch (animationName) {
      case 'disappear':
        deleteHandler(id);
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={`book-container ${deleteAnimClass}`}
      onAnimationEnd={(e) => animationEnded(e)}>
      <div className="book-info">
        <header>
          <span className="category">{category}</span>
          <h3 className="title" title={title}>{title}</h3>
          <span className="author">{author}</span>
        </header>
        <footer className="bottom-container">
          <button className="book-button" type="button">Edit</button>
          <span className="divider" />
          <button
            className="book-button"
            onClick={() => toggleDeleteAnim('book-disappear')}
            type="button">Remove</button>
        </footer>
      </div>
      <span className="divider" />
      <div className="display-progress">
        <svg>
          <circle cx="30" cy="30" r="30" />
          <circle
            stroke={strokeColor}
            strokeDashoffset={progressPercent}
            cx="30" cy="30" r="30"
            style={progressStyles}
            onAnimationEnd={(e) => animationEnded(e)}
          />
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
          {`Page ${progress} of ${pages}`}
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
            onChange={(e) => inputProgressUpdate(e.target.value)}
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  updateProgress: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Book;
