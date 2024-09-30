import { useSelector } from "react-redux";
import styles from "./ModalSummary.module.css";
import { RootState } from "../../store";
import Product from "./Product";
import { useState } from "react";

function ModalSummary() {
  const [showMore, setShowMore] = useState(false);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const shipping = 50;

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div
      className={
        showMore ? `${styles.active} ${styles.summary}` : `${styles.summary}`
      }
    >
      <div>
        <ul>
          <Product product={cart[0]} />
          <div className={styles.hidden}>
            <div>
              {cart.slice(1).map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </ul>
        <p className={styles.onlyTablet}>
          and {cart.slice(1).length} other element(s)
        </p>
        {cart.length > 1 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`${styles.btn} ${styles.noBtn}`}
          >
            {!showMore ? "View more" : "View less"}
          </button>
        )}
      </div>
      <div className={styles.total}>
        <div>
          <p>GRAND TOTAL</p>
          <h6>$ {totalPrice + shipping}</h6>
        </div>
      </div>
    </div>
  );
}

export default ModalSummary;
