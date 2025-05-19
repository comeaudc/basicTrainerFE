import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();

  const url = "http://localhost:3000/api";

  async function signUp(formData) {
    let res = await axios.post(`${url}/users`, formData);

    setCookie("token", res.data.token);
  }

  async function login(formData) {
    let res = await axios.post(`${url}/auth`, formData);

    setCookie("token", res.data.token);
  }

  function logout() {
    ["token"].forEach((cookie) => {
      removeCookie(cookie);
    });
  }

  const value = useMemo(
    () => ({
      cookies,
      signUp,
      login,
      logout,
    }),
    [cookies]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
