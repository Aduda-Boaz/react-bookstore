import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookList = (props) => {
  const {
    title = 'The Hunger Game',
    author = 'Suzzane Collins',
    categories = 'Action',
  } = props;

  return (
    <div className="List-container">
      <div className="BookDetils">
        <h4 className="Genre">{categories}</h4>
        <h2 className="BookTitle">{title}</h2>
        <p className="BookAuthor">{author}</p>
        <button type="button" className="btn">Comment</button>
        <button type="button" className="btn">Remove</button>
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
    </div>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default BookList;
