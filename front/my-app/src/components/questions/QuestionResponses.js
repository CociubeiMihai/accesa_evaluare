import React from 'react';
import './QuestionResponses.css';

const QuestionResponses = ({ title, description, author }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="description">{description}</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default QuestionResponses;
