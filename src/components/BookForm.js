import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { sendBook } from '../redux/books/books';

const category = ['Fantasy', 'Action', 'Sci-Fi', 'Romance', 'Biography'];

const BookForm = () => {
  const initialState = {
    title: '', author: '', categories: '',
  };

  const [formState, setFormState] = useState(initialState);

  const handleChange = () => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      categories: formState.categories[0],
    };

    dispatch(sendBook(newBook));
  }
    return (
      <form onSubmit={submitToStore} className="form-container">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input name="title" type="text" onChange={handleChange} placeholder="Book Title" required />
        <input name="author" type="text" onChange={handleChange} placeholder="Book Author" required />
        <select name="category" id="categories" onChange={handleChange} required>
          <option value="">Categories</option>
          {
            category.map((categories) => (
              <option key={categories} value={categories}>{categories}</option>
            ))
          }
        </select>
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BookForm;
