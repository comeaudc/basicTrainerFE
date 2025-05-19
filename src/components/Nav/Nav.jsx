import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/authContext";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  const { logout, cookies } = useAuth();
  const nav = useNavigate();
  function handleLogout() {
    try {
      logout();

      nav("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {cookies.token ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li onClick={handleLogout}>
              {" "}
              <button>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
