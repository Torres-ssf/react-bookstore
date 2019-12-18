export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBookMsg = book => ({ type: CREATE_BOOK, book });

export const removeBookMsg = id => ({ type: REMOVE_BOOK, id });
