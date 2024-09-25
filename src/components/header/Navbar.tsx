import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { handleVisibility, initializeCart } from "../../cart/cartSlice";
import { RootState } from "../../store";
import { useEffect } from "react";

interface NavbarProps {
  isMenuOpened: boolean;
  setIsMenuOpened: (isMenuOpened: boolean) => void;
}

function Navbar({ isMenuOpened, setIsMenuOpened }: NavbarProps) {
  const dispatch = useDispatch();
  const cartLength = useSelector((state: RootState) => state.cart.cart).length;

  function handleClick() {
    dispatch(handleVisibility());
  }

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const parsedCart = cart ? JSON.parse(cart) : [];
    dispatch(initializeCart(parsedCart));
  }, [dispatch]);

  return (
    <>
      <nav className={styles.primaryNav}>
        <Button
          type="menu"
          functionHandler={() => setIsMenuOpened(!isMenuOpened)}
        />
        <Link to="/">
          <img src={logo} alt="audiophile logo" />
        </Link>
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
        <button onClick={handleClick} disabled={cartLength === 0}>
          <img src={cartIcon} alt="cart icon" />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
