import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import BookList from './BookList';

const BookDisplay = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div className="bookdisplay">
      <ul>
        {books.map((book) => (
          <BookList
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
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
