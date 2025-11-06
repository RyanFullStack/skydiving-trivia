import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { questions } from "./Data/questionList";
import TriviaQuiz from "./Components/Game";
import Leaders from "./Components/Leaderboard";
import About from "./Components/About";
import FreeJump from "./Components/FreeJump";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/about'>
          <About />
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
