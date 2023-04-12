import React, { useState } from 'react';
import './PostAnswers.css';
import { voteAnswer } from '../../service/AnswerService';

const PostAnswers = ({ answers, postAuthor, questId }) => {
  const [bestAnswerId, setBestAnswerId] = useState(null);
  const user = JSON.parse(localStorage.getItem('User'));
  const markAsBest = (id) => {
    setBestAnswerId(id);
    voteAnswer(questId, id)
  };

  return (
    <div className="post-answers">
      {answers.map((answer) => (
        <div className={`answer ${answer.id === bestAnswerId ? 'best-answer' : ''}`} key={answer.id}>
          <div className="answer-author">{answer.author}</div>
          <div className="answer-text">{answer.answer}</div>
          {!bestAnswerId && (
            <div>
                {postAuthor === user.email ? 
            <button className="best-button" onClick={() => markAsBest(answer.id)}>
              Mark as Best
            </button> : null}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostAnswers;
