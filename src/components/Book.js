import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = (props) => {
  const { book, updateProgress, deleteHandler } = props;

  const [updateForm, toggleForm] = useState(false);
  const [inputProgress, inputProgressUpdate] = useState(book.progress);
  const [deleteAnimClass, toggleDeleteAnim] = useState('');

  const displayNone = updateForm ? { display: 'flex' } : { display: 'none' };

  const percentCompleted = Math.floor(book.progress / book.pages * 100);
  const progressPercent = Math.round((1 - (book.progress / book.pages)) * 189);
  const strokeColor = percentCompleted === 100 ? '#32A745' : '#3481c9';
  const progressStyles = { transition: 'stroke-dashoffset 500ms linear' };

  const updateProgressHandler = (e) => {
    toggleForm(!updateForm);
    updateProgress(e, book.id, book.index, parseInt(inputProgress, 10));
  };

  const animationEnded = (e) => {
    const { animationName } = e;

    switch (animationName) {
      case 'disappear':
        deleteHandler(book.id);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`book-container ${deleteAnimClass}`}
      onAnimationEnd={e => animationEnded(e)}
    >
      <div className="book-info">
        <header>
          <span className="category">{book.category}</span>
          <h3 className="title" title={book.title}>{book.title}</h3>
          <span className="author">{book.author}</span>
        </header>
        <footer className="bottom-container">
          <Link
            className="book-button"
            to={{
              pathname: '/edit-book',
              state: {
                book,
              },
            }}
          >
            Edit
          </Link>
          <span className="divider" />
          <button
            className="book-button"
            onClick={() => toggleDeleteAnim('book-disappear')}
            type="button"
          >
            Remove
          </button>
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
            onAnimationEnd={e => animationEnded(e)}
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
          {`Page ${book.progress} of ${book.pages}`}
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
            onChange={e => inputProgressUpdate(e.target.value)}
            min="1"
            max={book.pages}
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
  book: PropTypes.exact({
    id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    pages: PropTypes.number,
    progress: PropTypes.number,
  }).isRequired,
  updateProgress: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default Book;
