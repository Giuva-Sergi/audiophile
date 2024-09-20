import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import Button from "../Button";

interface NavbarProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (isMenuOpened: boolean) => void;
}

function Navbar({ isMenuOpened, setIsMenuOpened }: NavbarProps) {
  return (
    <>
      <nav className={styles.primaryNav}>
        <Button
          type="menu"
          functionHandler={() => setIsMenuOpened(!isMenuOpened)}
        />
        <img src={logo} alt="audiophile logo" />
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
        <button>
          <img src={cartIcon} alt="cart icon" />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
