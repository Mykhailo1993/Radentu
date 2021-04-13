import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;