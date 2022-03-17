import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const BookList = ({
  id,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  const percentage = 67;
  return (
    <li>
      <div>
        <h4 className="category">{category}</h4>
        <h3 className="book-title">{title}</h3>
        <span className="book-author">{author}</span>
        <button type="button" className="btn">Comments</button>
        <button type="btn active" onClick={(e) => { dispatch(removeBook(e.target.parentNode.id)); }}>Remove</button>
        <button type="button" className="btn">Edit</button>
      </div>
      <div>
        <div className="percent-section">
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h3 className="percentage">67%</h3>
            <span className="bk-completed">Completed</span>
          </div>
        </div>
        <div className="progress-section">
        <p className="current-chapt">Current Chapter</p>
          <p className="chapter-number">Chapter 17</p>
          <button type="button" className="update-btn submit">Chapter Progress</button>
        </div>
      </div>
    </li>
  );
};

BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookList;
