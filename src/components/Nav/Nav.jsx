import { Link } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
