import axios from "axios";

const API = "https://localhost:8080/answer";

export const saveAnswer = (idQuest, idUser, answer) => {
  return axios.post(API + "/save", {
    idQuest: idQuest,
    idUser: idUser,
    answer: answer,
  });
};

export const voteAnswer = (questid, answerId) => {
  return axios.post(API + "/vote", {
    questid: questid,
    answerId: answerId,
  });
};
