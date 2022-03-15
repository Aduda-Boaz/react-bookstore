import React from 'react';

function BookForm() {
  return (
    <div>
      <form className="add-new">
        <h4>Add new book</h4>
        <label htmlFor="Title">
          <input id="Title" placeholder="Title" required />
        </label>
        <label htmlFor="author">
          <input id="author" placeholder="Author" />
        </label>
        <label htmlFor="genre">
          <select className="book-selection" id="genre" required>
            <option value="Unknown">Genre</option>
            <option value="Leadership">Leadership</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Business">Business</option>
            <option value="Romance">Romance</option>
          </select>
        </label>
        <button type="submit" className="add-book">Add</button>
      </form>
    </div>
  );
}

export default BookForm;
