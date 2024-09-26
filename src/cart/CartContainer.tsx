import { useDispatch, useSelector } from "react-redux";
import styles from "./CartContainer.module.css";
import CartProductItem from "./CartProduct";
import { RootState } from "../store";
import { handleVisibility, removeAllItems } from "./cartSlice";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

interface CartContainerProps {
  checkout?: boolean;
}

function CartContainer({ checkout }: CartContainerProps) {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shipping = 50;

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function handleClick(actionType: string) {
    if (actionType === "remove") {
      dispatch(removeAllItems());
    } else {
      navigate("/checkout");
      dispatch(handleVisibility());
    }
  }

  return (
    <div
      className={classNames(styles.cartContainer, {
        [styles.cartCheckout]: checkout,
      })}
    >
      <div className={styles.cartHeader}>
        {checkout ? <h6>SUMMARY</h6> : <h6>CART ({cart.length})</h6>}
        {!checkout && (
          <button onClick={() => handleClick("remove")}>Remove all</button>
        )}
      </div>
      <ul className={styles.cartList}>
        {cart.map((item) => (
          <CartProductItem key={item.id} product={item} checkout={checkout} />
        ))}
      </ul>
      <div className={styles.total}>
        <span>TOTAL</span>
        <span>$ {totalPrice}</span>
      </div>
      {checkout && (
        <div>
          <div className={styles.total}>
            <span>SHIPPING</span>
            <span>$ {shipping}</span>
          </div>
          <div className={styles.total}>
            <span>VAT (INCLUDED)</span>
            <span>$ {Math.round(totalPrice * 0.2)}</span>
          </div>
          <div className={styles.total}>
            <span>GRAND TOTAL</span>
            <span>$ {totalPrice + shipping}</span>
          </div>
        </div>
      )}
      {!checkout && (
        <Button
          text={"checkout"}
          type="dense"
          functionHandler={() => handleClick("checkout")}
        />
      )}
    </div>
  );
}

export default CartContainer;
