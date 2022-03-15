import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 67;

function BookList() {
  return (
    <div className="List-container">
      <div className="BookDetils">
        <p className="Genre">Category</p>
        <p className="BookTitle">Title</p>
        <p className="BookAuthor">Author</p>
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
}

export default BookList;
