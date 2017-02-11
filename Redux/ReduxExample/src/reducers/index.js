import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
  books: BooksReducer,
  users: UsersReducer
});