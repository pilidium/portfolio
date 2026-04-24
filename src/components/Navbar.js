import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>Dilip Reddy</div>
      <div className={styles.links}>
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
