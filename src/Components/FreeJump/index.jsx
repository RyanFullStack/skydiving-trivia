import { useHistory } from "react-router-dom";

function FreeJump() {
    const history = useHistory()

    const handleHome = () => {
        history.push('/')
    }

  return (
    <div className='about-page'>
      <h1>How To Win:</h1>
      <p>
        At the end of every month during jump season, we will randomly select a name from the leaderboard to win a free jump. You do not need to be in the top three,
        simply having your name anywhere on the leaderboard will qualify you. The leaderboard will be reset at the beginning of every month.
      </p>
      <p className='blue'>Good Luck!</p>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

export default FreeJump;
