import { bookActionsNames } from '../actions/index';

const defaultState = () => ({
  loading: false,
  bookList: [],
});

const bookReducer = (state = defaultState(), action) => {
  const {
    FETCH_BOOK_DATA,
    ADD_BOOK_DATA,
    ADD_NEW_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    UPDATE_BOOK_PROGRESS,
  } = bookActionsNames;

  switch (action.type) {
    case FETCH_BOOK_DATA:
      return {
        ...state,
        loading: true,
      };

    case ADD_BOOK_DATA: {
      const book = action.data.map(e => ({
        id: e.id,
        title: e.title,
        author: e.author,
        category: e.category,
        pages: e.pages,
        progress: e.progress,
      }));

      return {
        loading: false,
        bookList: book,
      };
    }

    case ADD_NEW_BOOK: {
      const { book } = action;
      return {
        ...state,
        bookList: [
          ...state.bookList,
          {
            ...book,
            progress: 1,
          },
        ],
      };
    }

    case UPDATE_BOOK: {
      const { index, data } = action;
      return {
        ...state,
        bookList: [
          ...state.bookList.slice(0, index),
          {
            ...state.bookList[index],
            ...data,
          },
          ...state.bookList.slice(index + 1, state.bookList.length),
        ],
      };
    }

    case DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter(book => book.id !== action.id),
      };


    case UPDATE_BOOK_PROGRESS: {
      const { index, progress } = action;
      return {
        ...state,
        bookList: [
          ...state.bookList.slice(0, index),
          {
            ...state.bookList[index],
            progress,
          },
          ...state.bookList.slice(index + 1, state.bookList.length),
        ],
      };
    }

    default:
      return state;
  }
};

export default bookReducer;
