import React from "react";
import QuestionResponses from "./QuestionResponses";
import CommentBox from "./CommentBox";
import PostAnswers from "./PostAnswers";
import { saveAnswer } from "../../service/AnswerService";

const MainPage = (props) => {
  const idUser = JSON.parse(localStorage.getItem("User")).id;
  const handleSubmit = (e) => {
    saveAnswer(props.id, idUser, e);
  };

  return (
    <div>
      <QuestionResponses
        title={props.title}
        description={props.description}
        author={props.author}
      />
      <PostAnswers
        answers={props.answers}
        postAuthor={props.closed ? "" : props.author}
        questId={props.id}
      />
      {props.closed ? null : <CommentBox onSubmit={(e) => handleSubmit(e)} />}
    </div>
  );
};

export default MainPage;
