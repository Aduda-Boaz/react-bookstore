import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const categories = ['Action', 'Science-fiction', 'Business', 'Romance', 'Classic'];

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && author && category) {
      const newBook = {
        item_id: uuidv4(),
        title: {
          title,
          author,
        },
        author,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <>
      <h3 className="add-new">Add newbook</h3>
      <form className="form-container" onSubmit={submitBookToStore}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book author"
          name="author"
          value={author} onChange={(e) => setAuthor(e.target.value)} 
        />
        <select className="category-select" placeholder="Category" name="category" value={categories} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>Choose Category</option>
          {categories.sort().map((category) => (
            <option key={uuidv4()} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="submit" className="submit" value="add-book" />
      </form>
    </>
  );
};

export default BookForm;
