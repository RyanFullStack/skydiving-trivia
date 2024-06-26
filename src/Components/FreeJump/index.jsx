import { useHistory } from "react-router-dom";

function FreeJump() {
    const history = useHistory()

    const handleHome = () => {
        history.push('/')
    }

  return (
    <div className='about-page'>
      <h1>Game Update:</h1>
      <p>
        The free jump game has concluded. Thanks for participating! Please continue to use the game at your leisure to stay sharp on your knowledge.
      </p>
      <p className='blue'>Good Luck!</p>
      <button onClick={handleHome}>Home</button>
    </div>
  );
}

export default FreeJump;
