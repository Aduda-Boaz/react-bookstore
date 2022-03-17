const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookStore/books/REMOVE_BOOKS';
const FETCH_SUCCESS = 'bookStore/books/FETCH_SUCCESS';

const bookUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HmsXokvT4r0o4d4gM6bR/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOKS,
  id,
});

export const fetchBooksSuccess = (payload) => ({
  type: FETCH_SUCCESS,
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

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(bookUrl);
  const bkData = await response.json();
  const books = Object.entries(bkData).map(([key, value]) => ({
    item_id: key,
    title: {
      title: value[0].title.title,
      author: value[0].title.author,
    },
    category: value[0].category,
  }));
  dispatch(fetchBooksSuccess(books));
};

export const remove = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(`${bookUrl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: { 'content_type': 'application/JSON' },
  }); 
};

export const addToApi = (payload) => async (dispatch) => {
  dispatch(addBook(payload));
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lIztL2i9t2ZQU50QAYaz/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'content_type': 'application/JSON' },
  }); 
};
