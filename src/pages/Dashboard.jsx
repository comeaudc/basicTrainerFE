import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext/authContext";
import { userInfo } from "../contexts/UserContext/userContext";
import apiController from "../utilities/apiControllers.mjs";

// Components
import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import StartWorkoutButton from "../components/StartWorkoutButton/StartWorkoutButton";

export default function Dashboard() {
  const { cookies } = useAuth();
  const { setUser, setCurrentWO, currentWO, user } = userInfo();

  useEffect(() => {
    let loadUser = async () => {
      if (!user) {
        let userdata = await apiController.getUser(cookies.token);
        setUser(userdata.name);
        setCurrentWO(userdata.currentWorkout);
      }
    };

    loadUser();
  }, []);

  return (
    <div className="dashboardDiv">
      <StartWorkoutButton currentWO={currentWO} />
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
