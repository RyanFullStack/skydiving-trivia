import { useState, useEffect } from "react";

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
    if (gameStarted) {
      let timerId;

      if (timer > 0) {
        timerId = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        setSelectedAnswer(null);
        setFeedback(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setTimer(15);
      }

      return () => {
        clearInterval(timerId);
      };
    }
  }, [timer, gameStarted]);

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
          <p>Correct Answers: {correctAnswersCount}</p>
          <p>Time Remaining: {timer} seconds</p>
          <p>Question {currentQuestionIndex + 1}</p>
        </>
      )}
      {currentQuestionIndex === -1 && (
        <div>
          <h2>Welcome to the CSC Skydiving trivia game!</h2>
          <label>
            Select Difficulty:{" "}
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
        <div>
          <h2>Quiz Completed</h2>
          <p>
            Correct Answers: {correctAnswersCount}/{questionsList.length}
          </p>
          <p>
            Your Score:{" "}
            {((correctAnswersCount / questionsList.length) * 100).toFixed(2)}%
          </p>
          <button onClick={resetGame}>Play Again?</button>
        </div>
      )}
    </div>
  );
};

export default TriviaQuiz;
