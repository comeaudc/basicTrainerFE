import styles from "./Form.module.css";
import { useState } from "react";

export default function LoginForm({ setNewUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form className={styles.formLayout}>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Email..."
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password..."
      />
      <input onChange={handleChange} type="submit" value="Login" />

      <p>
        New User?{" "}
        <span
          className={styles.userToggle}
          onClick={() => {
            setNewUser((t) => !t);
          }}
        >
          Start Here
        </span>{" "}
      </p>
    </form>
  );
}
