import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <h1>Leaderboard</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#111111" : "transparent" }}
            >
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {leader.name}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {leader.score}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
              {new Date(leader.created_at).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><button onClick={handleHome}>Home</button></p>
    </div>
  );
}

export default Leaders;
