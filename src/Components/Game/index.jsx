import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import EndScreen from "../EndScreen";

const TriviaQuiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [timer, setTimer] = useState(20);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Hard");
  const [answerSelected, setAnswerSelected] = useState(false);
  const [answerTimeoutId, setAnswerTimeoutId] = useState(null);

  const history = useHistory();

  useEffect(() => {
    let timerId;

    if (gameStarted && currentQuestionIndex !== -1 && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && currentQuestionIndex !== -1 && !answerSelected) {
      setSelectedAnswer(null);
      setFeedback(null);
      setTimer(20);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    // Check if the game has ended
    if (!gameStarted || currentQuestionIndex >= questionsList.length) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timer, gameStarted, currentQuestionIndex, questionsList]);

  useEffect(() => {
    const currentQuestion = questionsList[currentQuestionIndex];
    if (currentQuestion) {
      const allAnswers = [
        currentQuestion.correctAnswer,
        ...currentQuestion.incorrectAnswers,
      ];
      setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    }
  }, [currentQuestionIndex, questionsList]);

  const handleAnswerClick = (answer) => {
    const currentQuestion = questionsList[currentQuestionIndex];

    if (currentQuestion && !answerSelected) {
      if (answer === currentQuestion.correctAnswer) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
        setFeedback("CORRECT!");
      } else {
        setFeedback("INCORRECT!");
      }
    }

    setAnswerSelected(true)
    setSelectedAnswer(answer);

    const timeoutId = setTimeout(() => {
    setSelectedAnswer(null);
    setFeedback(null);
    setTimer(20);
    setAnswerSelected(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }, 1000);

  // Store the timeout ID in state to cancel it if needed
  setAnswerTimeoutId(timeoutId);
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);

    // Shuffle all questions and apply difficulty filter
    const shuffledFilteredQuestions = questions
      .sort(() => Math.random() - 0.5)
      .filter(
        (q) =>
          selectedDifficulty === "Hard" ||
          (selectedDifficulty === "Medium" &&
            (q.difficulty === "Medium" || q.difficulty === "Easy")) ||
          (selectedDifficulty === "Easy" && q.difficulty === "Easy")
      );

    // Select the first 10, 30 or 50 questions depensing on diffictuly.
    let selectedQuestions;
    if (selectedDifficulty === 'Hard') {
      selectedQuestions = shuffledFilteredQuestions.slice(0, 50);
    }
    else if (selectedDifficulty === 'Medium') {
      selectedQuestions = shuffledFilteredQuestions.slice(0, 30);
    } else {
      selectedQuestions = shuffledFilteredQuestions.slice(0, 10);
    }
    setQuestionsList(selectedQuestions);
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentQuestionIndex(-1);
    setCorrectAnswersCount(0);
    setAnswerSelected(false)
    setSelectedAnswer(null)
    setFeedback(null)
    setTimer(20);

    if (answerTimeoutId) {
      clearTimeout(answerTimeoutId);
    }
  };

  const handleLeader = () => {
    history.push("/leaderboard");
  };

  const currentQuestion = questionsList[currentQuestionIndex];

  return (
    <div className="game-page">
      {gameStarted && currentQuestion && (
        <>
          <div className="correct-timer">
            <p>Correct: {correctAnswersCount}</p>
            <p>Mode: {selectedDifficulty}</p>
            <p>Time: {timer} seconds</p>
          </div>
          <p>
            Question {currentQuestionIndex + 1}/{questionsList.length}
          </p>
        </>
      )}
      {currentQuestionIndex === -1 && (
        <div className="home-page">
          <h1>Welcome to the CSC trivia game!</h1>
          <label>
            Difficulty:
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="Hard">Hard</option>
              <option value="Medium">Medium</option>
              <option value="Easy">Easy</option>
            </select>
          </label>
          <div>
            <button onClick={startGame} id="start-button">
              Start!
            </button>
          </div>
          {selectedDifficulty === "Hard" ? (
            <button onClick={handleLeader} id="leader-button">
              Leaderboard
            </button>
          ) : (
            <div className="not-hard-mode">
              Must be on Hard for Leaderboard!
            </div>
          )}
          <NavLink to="/free-jump" id='free-jump'>WIN A FREE JUMP</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      )}
      {currentQuestion && currentQuestionIndex !== -1 && (
        <div>
          <h2>{currentQuestion.question}</h2>
          <div>
            <div id="answer-button-container">
              {shuffledAnswers.map((answer, index) => (
                <div key={index}>
                  <button
                    id="answer-button"
                    disabled={answerSelected}
                    className={`answer-button ${
                      selectedAnswer === answer
                        ? answer === currentQuestion.correctAnswer
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(answer)}
                    style={{
                      margin: "5px",
                      padding: "10px",
                      cursor: "pointer",
                      backgroundColor:
                        selectedAnswer === answer
                          ? answer === currentQuestion.correctAnswer
                            ? "#4CAF50" // Correct answer selected
                            : "#FF5733" // Wrong answer selected
                          : "#1a1a1a", // Default color
                      color:
                        selectedAnswer === answer
                          ? answer === currentQuestion.correctAnswer
                            ? "#FFFFFF" // Correct answer selected
                            : "#FFFFFF" // Wrong answer selected
                          : "#2fccc4", // Default color
                    }}
                  >
                    {answer}
                  </button>
                </div>
              ))}
            </div>
            <div
              className="feedback"
              style={{
                color:
                  selectedAnswer === currentQuestion.correctAnswer
                    ? "#4CAF50" // Correct feedback color
                    : "#FF5733", // Incorrect feedback color
              }}
            >
              {feedback}
            </div>

            <button onClick={resetGame} id="quit-button">
              QUIT
            </button>
          </div>
        </div>
      )}
      {!currentQuestion && currentQuestionIndex !== -1 && gameStarted && (
        <EndScreen
          correctAnswersCount={correctAnswersCount}
          questionsList={questionsList}
          selectedDifficulty={selectedDifficulty}
          resetGame={resetGame}
        />
      )}
    </div>
  );
};

export default TriviaQuiz;
