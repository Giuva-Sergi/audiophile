import styles from "./Cart.module.css";
import CartContainer from "./CartContainer";

function Cart() {
  return (
    <div className={styles.overlay}>
      <CartContainer />
    </div>
  );
}

export default Cart;
