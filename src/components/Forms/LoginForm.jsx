import styles from "./Form.module.css";
import { useAuth } from "../../contexts/AuthContext/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import ErrorBanner from "../ErrorBanner/ErrorBanner";

export default function LoginForm({ setNewUser }) {
  const { login } = useAuth();
  const nav = useNavigate();

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(formData);

      nav("/dashboard");
    } catch (err) {
      console.error(err.response.data.errors);

      let errorList = err.response.data.errors.map((err) => {
        console.log(err.msg);
        return <ErrorBanner err={err.msg} />;
      });
      setError((s) => errorList);

      setTimeout(() => {
        setError((s) => null);
      }, 2000);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email..."
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password..."
          required
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
      {error && error}
    </>
  );
}
