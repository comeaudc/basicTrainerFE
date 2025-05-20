import styles from "./StartWorkoutButton.module.css";
import { Link } from "react-router-dom";

export default function StartWorkoutButton({ currentWO }) {
  return currentWO ? (
    <section className={styles.buttonContainer}>
      <div className={styles.buttonInside}>
        <Link to="/current">
          <h2>Resume Workout</h2>
        </Link>
      </div>
      <div className={styles.buttonInside}>
        <Link to="/current">
          <h2>Start New</h2>
        </Link>
      </div>
    </section>
  ) : (
    <section className={styles.noCurrent}>
      <Link to="/current">
        <h1>Start Workout</h1>
      </Link>
    </section>
  );
}
