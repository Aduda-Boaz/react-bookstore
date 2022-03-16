const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookStore/books/REMOVE_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
