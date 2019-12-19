export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBookMsg = book => ({ type: CREATE_BOOK, book });

export const removeBookMsg = id => ({ type: REMOVE_BOOK, id });

export const changeBookFilter = category => ({ type: CHANGE_FILTER, category });
