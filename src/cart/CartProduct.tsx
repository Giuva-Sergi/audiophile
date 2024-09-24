import { CartProduct } from "../types";
import styles from "./CartProduct.module.css";

interface CartProductProps {
  product: CartProduct;
}

function CartProductItem({ product }: CartProductProps) {
  return (
    <li className={styles.cartItem}>
      <img src={`/assets/cart/image-${product.slug}.jpg`} alt="" />
      <div>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>$ {product.price}</span>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.innerContainer}>
          <button>-</button>
          <span>{product.quantity}</span>
          <button>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartProductItem;
