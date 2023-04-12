import React, { useEffect, useState } from 'react';
import "../../styles/Question.style.css"
import background from "../../img/img1.jpg";
import Navbar from '../navbar/Navbar';
import { saveQuest } from '../../service/QuestService';

function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [prize, setPrize] = useState('');
  const [idUser, setIdUser] = useState([]);

useEffect(() => {
  const idUser = JSON.parse(localStorage.getItem('User'));
  if (idUser) {
    setIdUser(idUser);
  }
}, []);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePrizeChange = (event) => {
    if(event.target.value > idUser.tokens)
      alert("Nu dispuneti de atat de multi tokeni")
    else
     setPrize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveQuest(description, question, prize, idUser.id).then((rez) =>{
        console.log(rez)
    })
  };

  return (
    <div className='quest'>
        <Navbar />
        <h1 className='title'>Add your question</h1>
        <form onSubmit={handleSubmit}>
      <label className="question-input">Question:</label>
      <input
        id="question-input"
        type="text"
        value={question}
        onChange={handleQuestionChange}
      />
      <label htmlFor="description-input">Description:</label>
      <textarea
        id="description-input"
        value={description}
        onChange={handleDescriptionChange}
      />
      <label htmlFor="prize-input">Prize:</label>
      <input
        id="prize-input"
        type="number"
        value={prize}
        onChange={handlePrizeChange}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default QuestionForm;
