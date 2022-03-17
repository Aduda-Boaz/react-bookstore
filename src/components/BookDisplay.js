import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';
import { fetchBooks } from '../redux/books/books';

const BookDisplay = () => {
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    fetchBooks();
  }, [books]);

  return (
    <div>
      <ul className="book-display">
        {books.map((book) => (
          <BookList
            key={book.id}
            id={book.id}
            title={book.title.title}
            author={book.title.author}
            category={book.category}
          />
        ))}
        <hr />
        <BookForm />
      </ul>
    </div>
  );
};

export default BookDisplay;
