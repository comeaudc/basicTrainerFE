import DashboardContainer from "../components/DashboardContainer/DashboardContainer";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext/authContext";
import axios from "axios";

export default function Dashboard() {
  const { cookies } = useAuth();
  async function getUser() {
    try {
      let res = await axios.get("http://localhost:3000/api/auth", {
        headers: { "x-auth-token": cookies.token },
      });

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="dashboardDiv">
      <DashboardContainer page={"/current"}>
        <h1>StartWorkout</h1>
      </DashboardContainer>
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
