import { UPDATE_PROGRESS } from '../actions/index';

const progressReducer = (state = '0', action) => {
  switch (action.type) {
    case UPDATE_PROGRESS:
      return action.page;
    default:
      return state;
  }
};

export default progressReducer;
