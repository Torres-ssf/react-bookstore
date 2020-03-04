import { bookActionsNames } from '../actions/index';

const { CHANGE_FILTER } = bookActionsNames;

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default filterReducer;
