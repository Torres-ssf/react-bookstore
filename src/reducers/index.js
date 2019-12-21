import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';
import progressReducer from './progress';

const rootReducer = combineReducers({
  book: bookReducer,
  filter: filterReducer,
  progress: progressReducer,
});

export default rootReducer;
