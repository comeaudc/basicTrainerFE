import styles from "./Form.module.css";
import { useState } from "react";

export default function RegisterForm({ setNewUser }) {
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

  return (
    <form className={styles.formLayout}>
      <input onChange={handleChange} type="text" name="firstName" placeholder="First Name..." />
      <input onChange={handleChange} type="text" name="lastName" placeholder="Last Name..." />
      <input onChange={handleChange} type="text" name="username" placeholder="UserName (opt)..." />
      <input onChange={handleChange} type="text" name="email" placeholder="Email..." />
      <input onChange={handleChange} type="password" name="password" placeholder="Password..." />
      <input
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
  );
}
