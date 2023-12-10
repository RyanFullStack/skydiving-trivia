import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { questions } from "./Data/questionList";
import TriviaQuiz from "./Components/Game";
import Leaders from "./Components/Leaderboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/leaderboard'>
          <Leaders />
        </Route>

        <Route exact path="/">
          <div>
            <TriviaQuiz questions={questions} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
