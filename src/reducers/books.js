import { CREATE_BOOK, REMOVE_BOOK, UPDATE_BOOK_PROGRESS } from '../actions/index';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];

    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);

    case UPDATE_BOOK_PROGRESS: {
      const { index, progress } = action;
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          progress,
        },
        ...state.slice(index + 1, state.length),
      ];
    }

    default:
      return state;
  }
};

export default bookReducer;
