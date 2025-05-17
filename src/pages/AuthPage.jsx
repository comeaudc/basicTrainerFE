import { useState } from "react";

//Pages
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  return (
    <main>
      {newUser ? (
        <RegisterForm setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </main>
  );
}
