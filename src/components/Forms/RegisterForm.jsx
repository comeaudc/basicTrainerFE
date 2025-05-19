import styles from "./Form.module.css";
import { useAuth } from "../../contexts/AuthContext/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//  Components
import ErrorBanner from "../ErrorBanner/ErrorBanner";

export default function RegisterForm({ setNewUser }) {
  const { signUp } = useAuth();
  const nav = useNavigate();

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (formData.password !== formData.password2) {
        throw {
          response: { data: { errors: [{ msg: "Passwords must match" }] } },
        };
      } else {
        await signUp(formData);

        nav("/dashboard");
      }
    } catch (err) {
      console.error(err.response.data);
      let errorList = err.response.data.errors.map((err) => {
        return <ErrorBanner err={err.msg} />;
      });

      setError((s) => errorList);

      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formLayout}>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="First Name..."
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name..."
        />
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="UserName (opt)..."
        />
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
        <input
          onChange={handleChange}
          type="password"
          name="password2"
          placeholder="Confirm Password..."
        />
        <input type="submit" value="Login" />

        <p>
          Have an account already?{" "}
          <span
            className={styles.userToggle}
            onClick={() => {
              setNewUser((t) => !t);
            }}
          >
            Go Here
          </span>{" "}
        </p>
      </form>
      {error && error}
    </>
  );
}
