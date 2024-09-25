import { useDispatch, useSelector } from "react-redux";
import styles from "./CartContainer.module.css";
import CartProductItem from "./CartProduct";
import { RootState } from "../store";
import { handleCheckout, removeAllItems } from "./cartSlice";
import Button from "../components/Button";

function CartContainer() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleClick(actionType: string) {
    if (actionType === "remove") {
      dispatch(removeAllItems());
    } else {
      dispatch(handleCheckout());
    }
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h6>CART ({cart.length})</h6>
        <button onClick={() => handleClick("remove")}>Remove all</button>
      </div>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartProductItem key={item.id} product={item} />
        ))}
      </ul>
      <div className={styles.total}>
        <span>TOTAL</span>
        <span>$ {totalPrice}</span>
      </div>
      <Button
        text="checkout"
        type="dense"
        functionHandler={() => handleClick("checkout")}
      />
    </div>
  );
}

export default CartContainer;
