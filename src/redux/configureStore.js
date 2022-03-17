import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer, { fetchBooks } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
Store.dispatch(fetchBooks());

export default Store;
