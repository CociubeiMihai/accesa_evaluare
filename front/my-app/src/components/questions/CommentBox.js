import React, { useState } from 'react';
import './CommentBox.css';

const CommentBox = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment('');
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="comment-box">
      <label htmlFor="comment">Leave a comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write your comment here..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentBox;
