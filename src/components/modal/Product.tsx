import { CartProduct } from "../../types";
import styles from "./Product.module.css";

interface ProductProps {
  product: CartProduct;
}
function Product({ product }: ProductProps) {
  return (
    <li className={styles.productItem}>
      <img
        src={`assets/cart/image-${product.slug}.jpg`}
        alt={`${product.name} image`}
      />
      <div>
        <p>{product.name}</p>
        <p>$ {product.price}</p>
      </div>
      <div>
        <p>{product.quantity}x</p>
      </div>
    </li>
  );
}

export default Product;
