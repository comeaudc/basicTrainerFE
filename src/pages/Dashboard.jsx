import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext/authContext";
import { userInfo } from "../contexts/UserContext/userContext";
import axios from "axios";

// Components
import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import StartWorkoutButton from "../components/StartWorkoutButton/StartWorkoutButton";

export default function Dashboard() {
  const { cookies } = useAuth();
  const { setUser, setCurrentWO, currentWO, user } = userInfo();

  async function getUser() {
    try {
      let res = await axios.get("http://localhost:3000/api/auth", {
        headers: { "x-auth-token": cookies.token },
      });

      setUser(res.data.name);
      setCurrentWO(res.data.currentWorkout);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="dashboardDiv">
      <StartWorkoutButton currentWO={true} />
      <DashboardContainer>
        <h1>Current Workout</h1>
      </DashboardContainer>
      <DashboardContainer>
        <h1>Stats</h1>
      </DashboardContainer>
      <DashboardContainer>
        <h1>Workout History</h1>
      </DashboardContainer>
    </div>
  );
}
