import { Link } from "react-router-dom";
import styles from "./FooterNavbar.module.css";
import logo from "/assets/shared/desktop/logo.svg";

function FooterNavbar() {
  return (
    <nav className={styles.secondaryNav}>
      <picture className={styles.logo}>
        <img src={logo} alt="audiophile logo" />
      </picture>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product/headphones">headphones</Link>
        </li>
        <li>
          <Link to="/product/speakers">speakers</Link>
        </li>
        <li>
          <Link to="/product/earphones">earphones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNavbar;
