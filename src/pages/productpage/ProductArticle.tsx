import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { CartProduct, ProductFeature } from "../../types";
import styles from "./ProductArticle.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { handleItem } from "../../cart/cartSlice";
import { RootState } from "../../store";
import { useLocation } from "react-router-dom";

interface ProductArticleProps {
  product: ProductFeature;
  detailPage?: boolean;
}

function ProductArticle({ product, detailPage }: ProductArticleProps) {
  const productInCart: CartProduct | undefined = useSelector(
    (state: RootState) => state.cart.cart
  ).find((p: CartProduct) => p.id === product.id);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setQuantity(productInCart?.quantity || 0);
  }, [location.pathname, productInCart]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  function handleClick(actionType: string) {
    if (actionType === "increment") {
      setQuantity(quantity + 1);
    } else if (actionType === "decrement") {
      if (quantity === 0) return;
      setQuantity(quantity - 1);
    }
  }

  function handleProduct(product: ProductFeature) {
    dispatch(
      handleItem({
        id: product.id,
        name: product.name,
        price: product.price,
        slug: product.slug,
        quantity,
      })
    );
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
              disabled={quantity === 0}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleClick("increment")}>+</button>
          </div>
          <Button
            type="dense"
            text="add to cart"
            functionHandler={() => handleProduct(product)}
          />
        </div>
      ) : (
        <Button type="dense" text="see product" path={`${product.slug}`} />
      )}
    </article>
  );
}

export default ProductArticle;
