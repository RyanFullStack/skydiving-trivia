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
        You will be given random questions (50 on Hard, 30 on Medium, 10 on Easy) from a huge dataset of skydiving
        trivia. There are Easy, Medium, and Hard level questions. You will be given questions from your selected difficulty and below.
        You have 30 seconds for each question. At the end of the game,
        if you've made it to the leaderboard you'll be prompted to enter your
        name. Leaderboard status is only given if completed on Hard mode.
      </p>
      <p className='blue'>Thanks for playing!</p>
      <button onClick={handleHome}>Home</button>
      <div>
        <small>By: <a href='https://github.com/RyanFullStack' rel='noreferrer' target='_blank'>Ryan Erickson</a></small>
      </div>
    </div>
  );
}

export default About;
