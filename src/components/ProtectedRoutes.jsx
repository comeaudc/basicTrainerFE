import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/authContext";
import LandingPage from "../pages/LandingPage";

export default function ProtectedRoutes({ children }) {
  const { cookies } = useAuth();

  return cookies.token ? <Outlet /> : <LandingPage />;
}
