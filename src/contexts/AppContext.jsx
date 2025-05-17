import AuthProvider from "./AuthContext/authContext";

export default function AppContext({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
