import { useState } from "react";

//Pages
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  return (
    <>
      {newUser ? (
        <RegisterForm setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </>
  );
}
