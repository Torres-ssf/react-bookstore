export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({ type: CREATE_BOOK, book });

export const removeBook = id => ({ type: REMOVE_BOOK, id });