import styles from "./DashboardContainer.module.css";

export default function DashboardContainer({ children }) {
  return <section className={styles.dashboardContainer}>{children}</section>;
}
