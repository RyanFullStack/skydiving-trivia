import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LeaderboardSkeleton from "./skeleton";
import "./leaders.css";

function Leaders() {
  const [leaders, setLeaders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getLeaders = async () => {
      const response = await fetch(
        "https://csc-login.onrender.com/api/leaders/"
      );
      const data = await response.json();
      if (data.leaders) {
        setLeaders(data.leaders);
      } else {
        setLeaders([]);
      }
    };
    getLeaders();
  }, []);

  const handleHome = () => {
    history.push("/");
  };

  return (
    <div className="leader-page">
      <h1>Top 10!</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leaders[0] ? (
            leaders.map((leader, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#111111" : "transparent",
                }}
                className={
                  index === 0
                    ? "gold"
                    : index === 1
                    ? "silver"
                    : index === 2
                    ? "bronze"
                    : ""
                }
              >
                <td className="td1">
                  <div className="leader-name-container">
                    <span id="leader-position">{index + 1}.</span>{" "}
                    <span id="leader-name">{leader.name}</span>
                  </div>
                </td>
                <td className="td2">{leader.score}</td>
                <td className="td3">
                  {new Date(leader.created_at).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                  })}
                </td>
              </tr>
            ))
          ) : (
            <LeaderboardSkeleton />
          )}
        </tbody>
      </table>
      <p>
        <button onClick={handleHome}>Home</button>
      </p>
      <small>
        Tie or beat the lowest score on hard mode to get your name here!
      </small>
    </div>
  );
}

export default Leaders;
