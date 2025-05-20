import styles from "./DashboardContainer.module.css";
import { Link } from "react-router-dom";

export default function DashboardContainer({ children, page }) {
  return <section className={styles.dashboardContainer}><Link to={page}>{children}</Link></section>;
}
