export const FETCH_BOOK_DATA = 'FETCH_BOOK_DATA'
export const ADD_BOOK_DATA = 'ADD_BOOK_DATA';
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK_PROGRESS = 'UPDATE_BOOK_PROGRESS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchBookData = () => ({ type: FETCH_BOOK_DATA });

export const addBookData = data => ({ type: ADD_BOOK_DATA, data });

export const addNewBook = book => ({ type: ADD_NEW_BOOK, book });

export const deleteBook = id => ({ type: DELETE_BOOK, id });

export const updateBookProgress = (id, index, progress) => ({
  type: UPDATE_BOOK_PROGRESS,
  id,
  index,
  progress,
});

export const changeBookFilter = category => ({ type: CHANGE_FILTER, category });
