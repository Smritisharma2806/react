import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.title}>🍽️ Foodie</h2>
      <p className={styles.tagline}>
        Discover something delicious!
      </p>
    </nav>
  );
}

export default Nav; 