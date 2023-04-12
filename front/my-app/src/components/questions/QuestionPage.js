import React, { useEffect, useState } from "react";
import QuestComponent from "./QuestComponent";
import { findAllQuests } from "../../service/QuestService";
import "./QuestionPage.css";
import Navbar from "../navbar/Navbar";
import MainPage from "./MainPage";

function QuestionPage() {
  const [quests, setQuests] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [question, setQuestion] = useState([]);
  function handleClick(e) {
    setQuestion(e)
    setClicked(true);
  }

  useEffect(() => {
    findAllQuests().then((rez) => {
      setQuests(rez.data);
      console.log(rez.data)
    });
  }, []);

  return (
    <div className="quest">
      <Navbar />
      {clicked ? (
        <MainPage 
        title={question.title}
        description={question.description}
        author= {question.author.email}
        answers = {question.answers}
        id = {question.id}
        closed = {question.closed}
        />
      ) : (
        <div className="question-page">
          {quests.map((q) => (
            <QuestComponent
              title={q.title}
              prize={q.prize}
              description={q.description}
              author={q.author.email}
              isAvailable={q.closed}
              onClick={() => handleClick(q)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
