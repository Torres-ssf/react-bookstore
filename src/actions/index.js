export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const UPDATE_BOOK_PROGRESS = 'UPDATE_BOOK_PROGRESS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBookMsg = book => ({ type: CREATE_BOOK, book });

export const removeBookMsg = id => ({ type: REMOVE_BOOK, id });

export const updateBookProgress = (index, progress) => ({ type: UPDATE_BOOK_PROGRESS, index, progress });

export const changeBookFilter = category => ({ type: CHANGE_FILTER, category });
