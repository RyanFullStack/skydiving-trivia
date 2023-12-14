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
          {leaders.map((leader, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#111111" : "transparent" }}
            >
              <td style={{ padding: "8px", border: "1px solid #ddd", color: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : '#FFFFFF'}}>
                <div className="leader-name-container"><span id ='leader-position'>{index+1}.</span> <span id='leader-name'>{leader.name}</span></div>
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd", color: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : '#FFFFFF' }}>
                {leader.score}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd", color: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : '#FFFFFF' }}>
              {new Date(leader.created_at).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><button onClick={handleHome}>Home</button></p>
      <small>Tie or beat the lowest score on hard mode to get your name here!</small>
    </div>
  );
}

export default Leaders;
