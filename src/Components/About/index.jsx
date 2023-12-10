import { useHistory } from "react-router-dom";

function About() {
    const history = useHistory()

    const handleHome = () => {
        history.push('/')
    }

  return (
    <div className='about-page'>
      <h1>About the app</h1>
      <p>
        You will be given 30 random questions from a huge dataset of skydiving
        trivia. You have 15 seconds for each question. At the end of the game,
        if you've made it to the leaderboard you'll be prompted to enter your
        name. Leaderboard status is only given if completed on Hard mode.
      </p>
      <p>Thanks for playing!</p>
      <button onClick={handleHome}>Home</button>
      <div>
        <small>By: <a href='https://github.com/RyanFullStack' rel='noreferrer' target='_blank'>Ryan Erickson</a></small>
      </div>
    </div>
  );
}

export default About;
