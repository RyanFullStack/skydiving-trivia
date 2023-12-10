import React from "react";
import { questions } from "./Data/questionList";
import TriviaQuiz from "./Components/Game";
import "./App.css";

function App() {
  return (
    <div>
      <TriviaQuiz questions={questions} />
    </div>
  );
}

export default App;
