import axios from "axios";

async function startWorkout(token) {
  try {
    let res = await axios.post("http://localhost:3000/api/workout", null, {
      headers: { "x-auth-token": token },
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function getUser(token) {
  try {
    let res = await axios.get("http://localhost:3000/api/auth", {
      headers: { "x-auth-token": token },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export default { startWorkout, getUser };
