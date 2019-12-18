import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = null, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      state = action.category === 'All' ? null : action.category;
      return state;
    default:
      return state;
  }
};

export default filterReducer;
