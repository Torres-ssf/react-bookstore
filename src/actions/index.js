const FETCH_BOOK_DATA = 'FETCH_BOOK_DATA';
const ADD_BOOK_DATA = 'ADD_BOOK_DATA';
const ADD_NEW_BOOK = 'ADD_NEW_BOOK';
const UPDATE_BOOK = 'UPDATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const UPDATE_BOOK_PROGRESS = 'UPDATE_BOOK_PROGRESS';
const CHANGE_FILTER = 'CHANGE_FILTER';

const bookActionsNames = {
  FETCH_BOOK_DATA: 'FETCH_BOOK_DATA',
  ADD_BOOK_DATA: 'ADD_BOOK_DATA',
  ADD_NEW_BOOK: 'ADD_NEW_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
  DELETE_BOOK: 'DELETE_BOOK',
  UPDATE_BOOK_PROGRESS: 'UPDATE_BOOK_PROGRESS',
  CHANGE_FILTER: 'CHANGE_FILTER',
}

const bookActions = {
  fetchBookData: () => ({ type: FETCH_BOOK_DATA }),
  addBookData: data => ({ type: ADD_BOOK_DATA, data }),
  addNewBook: book => ({ type: ADD_NEW_BOOK, book }),
  updateBook: (id, index, data) => ({
    type: UPDATE_BOOK,
    id,
    index,
    data,
  }),
  deleteBook: id => ({ type: DELETE_BOOK, id }),
  updateBookProgress: (id, index, progress) => ({
    type: UPDATE_BOOK_PROGRESS,
    id,
    index,
    progress,
  }),
  changeBookFilter: category => ({ type: CHANGE_FILTER, category }),
};

export { bookActionsNames, bookActions  };