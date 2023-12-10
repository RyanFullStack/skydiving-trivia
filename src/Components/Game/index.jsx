import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import EndScreen from "../EndScreen";

const TriviaQuiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [timer, setTimer] = useState(15);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Hard");

  useEffect(() => {
    let timerId;

    if (gameStarted && currentQuestionIndex !== -1 && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && currentQuestionIndex !== -1) {
      setSelectedAnswer(null);
      setFeedback(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(15);
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

  useEffect(() => {
    if (gameStarted && currentQuestionIndex === 0) {
      const filteredQuestions = questions
        .filter(
          (q) =>
            selectedDifficulty === "Hard" ||
            (selectedDifficulty === "Medium" &&
              (q.difficulty === "Medium" || q.difficulty === "Easy")) ||
            (selectedDifficulty === "Easy" && q.difficulty === "Easy")
        )
        .sort(() => Math.random() - 0.5);

      setQuestionsList(filteredQuestions);
    }
  }, [currentQuestionIndex, gameStarted, selectedDifficulty, questions]);

  const handleAnswerClick = (answer) => {
    const currentQuestion = questionsList[currentQuestionIndex];
    if (currentQuestion) {
      if (answer === currentQuestion.correctAnswer) {
        setCorrectAnswersCount((prevCount) => prevCount + 1);
        setFeedback("CORRECT!");
      } else {
        setFeedback("INCORRECT!");
      }
    }

    setSelectedAnswer(answer);

    setTimeout(() => {
      setSelectedAnswer(null);
      setFeedback(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(15);
    }, 1000);
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);

    // Shuffle the order of all questions
    const shuffledAllQuestions = [...questions].sort(() => Math.random() - 0.5);

    // Select the first 30 questions
    const selectedQuestions = shuffledAllQuestions.slice(0, 30);

    // Shuffle the order of selected questions
    const shuffledQuestions = selectedQuestions.sort(() => Math.random() - 0.5);

    setQuestionsList(shuffledQuestions);
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentQuestionIndex(-1);
    setCorrectAnswersCount(0);
  };

  const currentQuestion = questionsList[currentQuestionIndex];

  return (
    <div>
      {gameStarted && currentQuestion && (
        <>
          <div className="correct-timer">
            <p>Correct: {correctAnswersCount}</p>
            <p>Time: {timer} seconds</p>
          </div>
          <p>
            Question {currentQuestionIndex + 1}/{questionsList.length}
          </p>
        </>
      )}
      {currentQuestionIndex === -1 && (
        <div className="home-page">
          <h1>Welcome to the CSC Skydiving trivia game!</h1>
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
            <button onClick={startGame}>Start!</button>
          </div>
          {selectedDifficulty === "Hard" ? (
            <NavLink to="/leaderboard">View Leaderboard</NavLink>
          ) : (
            <div className="not-hard-mode">Must be on Hard for Leaderboard!</div>
          )}
          <NavLink to="/about">About</NavLink>
        </div>
      )}
      {currentQuestion && currentQuestionIndex !== -1 && (
        <div>
          <h2>{currentQuestion.question}</h2>
          <div>
            {shuffledAnswers.map((answer, index) => (
              <div key={index}>
                <button
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
                        : "#333333", // Default color
                  }}
                >
                  {answer}
                </button>
              </div>
            ))}
            {selectedAnswer && (
              <p
                style={{
                  color:
                    selectedAnswer === currentQuestion.correctAnswer
                      ? "#4CAF50" // Correct feedback color
                      : "#FF5733", // Incorrect feedback color
                }}
              >
                {feedback}
              </p>
            )}
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
