import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function EndScreen({ correctAnswersCount, questionsList, selectedDifficulty, resetGame }) {
  const [lowestScore, setLowestScore] = useState(null);
  const [userName, setUserName] = useState('')
  const history = useHistory()

  useEffect(() => {
    const getLeaders = async () => {
      const response = await fetch(
        "https://csc-login.onrender.com/api/leaders/"
      );
      const data = await response.json();
      if (data.leaders) {
        const scores = data.leaders.map((leader) => {
          return parseInt(leader.score.split("/")[0]);
        });
        const lowest = Math.min(...scores);
        setLowestScore(lowest);
      } else {
        setLowestScore(null);
      }
    };
    getLeaders();
  }, []);

  const handleSubmit = async() => {
    await fetch('https://csc-login.onrender.com/api/leaders/new', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": userName,
            "score": `${correctAnswersCount}/${questionsList.length}`,
            "api_key": import.meta.env.VITE_API_KEY
        })
    })
    history.push('/leaderboard')
  }

  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>Correct Answers: {correctAnswersCount}/{questionsList.length}</p>
      <p>
        Your Score:{" "}
        {((correctAnswersCount / questionsList.length) * 100).toFixed(2)}%
      </p>
      {lowestScore && selectedDifficulty === 'Hard' && correctAnswersCount >= lowestScore
      ?
      <div>
        <h3>You've earned a leaderboard spot!</h3>
        <p>Enter your name below: <br /><small>up to 15 characters - </small><small>{userName.length} / 15</small></p>
        <p><input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)}/></p>
        <p><button onClick={handleSubmit} disabled={userName.length > 15 || !userName.trim()}>Submit!</button></p>
      </div>
      :
      null}
      <button onClick={resetGame}>Play Again?</button>
    </div>
  );
}

export default EndScreen;