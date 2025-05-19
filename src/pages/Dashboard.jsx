import DashboardContainer from "../components/DashboardContainer/DashboardContainer";

export default function Dashboard() {
  return (
    <div className='dashboardDiv'>
      <DashboardContainer>
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
