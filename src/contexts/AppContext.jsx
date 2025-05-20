import AuthProvider from "./AuthContext/authContext";
import UserProvider from "./UserContext/userContext";

export default function AppContext({ children }) {
  return <AuthProvider><UserProvider>{children}</UserProvider></AuthProvider>;
}
