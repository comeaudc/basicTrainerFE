import { useState, useEffect } from "react";
import axios from "axios";

// Contexts
import { userInfo } from "../contexts/UserContext/userContext";
import { useAuth } from "../contexts/AuthContext/authContext";

// Route info
// @route: POST /api/workout

export default function ActiveWorkout() {
  const { cookies } = useAuth();
  const { currentWO, setCurrentWO } = userInfo();

  async function startWorkout() {
    try {
      let res = await axios.post("http://localhost:3000/api/workout", null, {
        headers: { "x-auth-token": cookies.token },
      });

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!currentWO) {
      startWorkout();
    }
  }, []);

  return <h1>Active Workout</h1>;
}
