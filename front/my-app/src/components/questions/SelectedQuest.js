import React, { useState } from 'react';

const Comment = ({ text }) => {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <p>{text}</p>
      <p>Votes: {votes}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
};

const SelectedQuest = ({ title, description, comments }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} text={comment} />
      ))}
      <form>
        <input type="text" placeholder="Add a comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SelectedQuest;
