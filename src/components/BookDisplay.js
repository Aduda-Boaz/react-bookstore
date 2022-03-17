import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/books';

const BookDisplay = () => {
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    fetchBooks();
  }, [books]);

  return (
    <div className="book-list">
      <ul className="book">
        {books.map((book) => (
          <BookList
            key={book.item_id}
            id={book.item_id}
            title={book.title.title}
            author={book.title.author}
            category={book.category}
          />
        ))}
      </ul>
      <hr />
      <BookForm />
    </div>
  );
};

export default BookDisplay;
