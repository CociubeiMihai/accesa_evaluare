import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import QuestionForm from "./components/questions/QuestionForm";
import QuestionPage from "./components/questions/QuestionPage";
import MainPage from "./components/questions/MainPage";
import Rank from "./components/questions/Rank";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/question" element={<QuestionForm />} />
          <Route path="/quests" element={<QuestionPage />} />
          <Route path="/rank" element={<Rank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
