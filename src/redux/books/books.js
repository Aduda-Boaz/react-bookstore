const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOKS = 'bookStore/books/REMOVE_BOOKS';
const GET_BOOK = 'bookStore/books/GET_BOOK';
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

export const sendBook = (payload) => (
  async (dispatch) => {
    await fetch(bookUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: {
          newTitle: payload.title,
          newAuthor: payload.author,
        },
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addBook(payload));
  }
);

export const deleteBook = (id) => (
  async (dispatch) => {
    const response = await fetch(`${bookUrl}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    if (response.status === 201) {
      dispatch(removeBook(id));
    }
  }
);

export const getBook = async (dispatch) => {
  const response = await fetch(bookUrl);
  const data = await response.json();
  const books = Object.entries(data);
  books.forEach((item) => {
    const [id, value] = item;
    const { title, category } = value[0];
    const { newTitle, newAuthor } = title;

    const newBook = {
      id,
      title: newTitle,
      author: newAuthor,
      category,
    };
    dispatch(addBook(newBook));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOKS:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
