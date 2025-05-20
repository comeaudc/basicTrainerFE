import { useState, useEffect } from "react";
import apiController from "../utilities/apiControllers.mjs";

// Contexts
import { userInfo } from "../contexts/UserContext/userContext";
import { useAuth } from "../contexts/AuthContext/authContext";

// Route info
// @route: POST /api/workout

export default function ActiveWorkout() {
  const { cookies } = useAuth();
  const { currentWO, setCurrentWO } = userInfo();

  useEffect(() => {
    let loadData = async () => {
      if (!currentWO) {
        let workout = await apiController.startWorkout(cookies.token);
        setCurrentWO(workout);
      }
    };

    loadData()
  }, []);

  return <h1>Active Workout</h1>;
}
