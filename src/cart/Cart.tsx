import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { RootState } from "../store";
import CartProductItem from "./CartProduct";
import Button from "../components/Button";
function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  return (
    <div className={styles.overlay}>
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h6>CART ({cart.length})</h6>
          <button>Remove all</button>
        </div>
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <CartProductItem key={item.id} product={item} />
          ))}
        </ul>
        <div className={styles.total}>
          <span>TOTAL</span>
          <span>$ 1500</span>
        </div>
        <Button text="checkout" type="dense" />
      </div>
    </div>
  );
}

export default Cart;
