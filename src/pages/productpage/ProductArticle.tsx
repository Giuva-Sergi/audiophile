import { useState } from "react";
import Button from "../../components/Button";
import { ProductFeature } from "../../types";
import styles from "./ProductArticle.module.css";
import classNames from "classnames";

interface ProductArticleProps {
  product: ProductFeature;
  detailPage?: boolean;
}

function ProductArticle({ product, detailPage }: ProductArticleProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  function handleClick(actionType: string) {
    if (actionType === "increment") {
      setQuantity(quantity + 1);
    } else if (actionType === "decrement") {
      if (quantity <= 1) return;
      setQuantity(quantity - 1);
    }
  }
  return (
    <article
      className={classNames(styles.productCard, {
        [styles.productDetail]: detailPage,
      })}
    >
      {product.new && <p className={styles.overline}>NEW PRODUCT</p>}
      <h2>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      {detailPage && <h6>$ {product.price}</h6>}
      {detailPage ? (
        <div className={styles.btnContainer}>
          <div className={styles.innerContainer}>
            <button
              onClick={() => handleClick("decrement")}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleClick("increment")}>+</button>
          </div>
          <Button type="dense" text="add to cart" />
        </div>
      ) : (
        <Button type="dense" text="see product" path={`${product.slug}`} />
      )}
    </article>
  );
}

export default ProductArticle;
