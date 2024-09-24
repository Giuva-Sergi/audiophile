import { useState } from "react";
import { CartProduct } from "../types";
import styles from "./CartProduct.module.css";
import { useDispatch } from "react-redux";
import { handleQuantity } from "./cartSlice";

interface CartProductProps {
  product: CartProduct;
}

function CartProductItem({ product }: CartProductProps) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  function handleClick(type: string) {
    const updatedQuantity = type === "increment" ? quantity + 1 : quantity - 1;

    if (updatedQuantity < 0) return;
    setQuantity(updatedQuantity);

    dispatch(
      handleQuantity({
        ...product,
        quantity: updatedQuantity,
      })
    );
  }

  return (
    <li className={styles.cartItem}>
      <img src={`/assets/cart/image-${product.slug}.jpg`} alt="" />
      <div>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>$ {product.price}</span>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.innerContainer}>
          <button onClick={() => handleClick("decrement")}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => handleClick("increment")}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartProductItem;
