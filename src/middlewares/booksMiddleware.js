import { bookActionsNames, bookActions } from '../actions';
import api from '../services/api';

const booksMiddleware = store => next => async (action) => {
  const {
    FETCH_BOOK_DATA,
    ADD_NEW_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    UPDATE_BOOK_PROGRESS
  } = bookActionsNames;

  const { addBookData } = bookActions;

  switch (action.type) {
    case FETCH_BOOK_DATA: {
      next(action);

      try {
        const response = await api.get('/books');
        const { data } = response;
        store.dispatch(addBookData(data));
      } catch (error) {
        console.log(error);
      }

      break;
    }

    case ADD_NEW_BOOK: {
      next(action);
      const { book } = action;

      try {
        const response = await api.post('/books', book);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      break;
    }

    case UPDATE_BOOK: {
      next(action);
      const { id, data } = action;

      console.log(data);

      try {
        const response = await api.put(`/books/${id}`, data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      break;
    }

    case DELETE_BOOK: {
      next(action);

      const { id } = action;

      try {
        const response = await api.delete(`/books/${id}`);
        console.log(response)
      } catch (error) {
        console.log(error);
      }

      break;
    }

    case UPDATE_BOOK_PROGRESS: {
      next(action);
      const { id, progress } = action;

      try {
        const response = await api.put(`/books/${id}`, {progress});
        console.log(response);
      } catch(error) {
        console.log(error);
      }

      break;
    }

    default:
      next(action);
  }
}

export default booksMiddleware;
