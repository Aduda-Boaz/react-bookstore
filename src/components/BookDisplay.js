import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

function BookDisplay() {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
}

export default BookDisplay;
