import axios from "axios";

const API = "https://localhost:8080";

export const saveQuest = (description, title, prize, idUser) => {
  return axios.post(API + "/quest/save", {
    title: title,
    description: description,
    prize: prize,
    idAuthor: idUser,
  });
};

export const findAllQuests = () => {
  return axios.get("https://localhost:8080/quest/all");
};
