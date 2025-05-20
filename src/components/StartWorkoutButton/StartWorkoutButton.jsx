import styles from "./StartWorkoutButton.module.css";

export default function StartWorkoutButton({ currentWO }) {
  return currentWO ? (
    <section className={styles.buttonContainer}>
      <div className={styles.buttonInside}><h2>Resume Workout</h2></div>
      <div className={styles.buttonInside}><h2>Start New</h2></div>
    </section>
  ) : (
    <section className={styles.buttonContainer}>
      <h1>Start Workout</h1>
    </section>
  );
}
