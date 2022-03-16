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
  return (
    <li className="List-container" id={id}>
      <div className="Bookdetails">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button" className="btn">Comment</button>
        <button type="button" className="btn" onClick={(e) => { dispatch(removeBook(e.target.parentNode.id)); }}>Remove</button>
        <button type="button" className="btn">Edit</button>
      </div>
      <div className="Scale">
        <div className="Graph">
          <div className="progressBar" style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={67} />
            <p className="percentage">67%</p>
          </div>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="Progress">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn btn">Update Book</button>
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
