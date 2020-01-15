import {
  FETCH_BOOK_DATA, addBookData, ADD_NEW_BOOK, DELETE_BOOK, UPDATE_BOOK_PROGRESS, UPDATE_BOOK,
} from '../actions';

const booksMiddleware = store => next => (action) => {
  switch (action.type) {
    case FETCH_BOOK_DATA: {
      next(action);
      fetch('/api/books')
        .then(response => response.json())
        .then(json => store.dispatch(addBookData(json)))
        .catch(error => console.log(error));
      break;
    }

    case ADD_NEW_BOOK: {
      next(action);
      const { book } = action;
      fetch('/api/books', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      }).then(response => {
        console.log(response);
      })
        .catch(error => console.log(error));
      break;
    }

    case UPDATE_BOOK: {
      next(action);
      const { id, data } = action;
      fetch(`/api/books/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ ...data }),
        headers: {
          'Content-type': 'application/json'
        },
      }).then(response => console.log(response))
        .catch(error => console.log(error));
      break;
    }

    case DELETE_BOOK: {
      next(action);
      fetch(`/api/books/${action.id}`, {
        method: 'DELETE'
      }).then(response => console.log(response))
        .catch(error => console.log(error));
      break;
    }

    case UPDATE_BOOK_PROGRESS: {
      next(action);
      const { id, progress } = action;
      console.log(id);
      fetch(`/api/books/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ progress }),
        headers: {
          'Content-type': 'application/json'
        },
      }).then(response => console.log(response))
        .catch(error => console.log(error));
      break;
    }

    default:
      next(action);
  }
}

export default booksMiddleware;
