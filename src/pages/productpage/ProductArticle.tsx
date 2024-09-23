import Button from "../../components/Button";
import { ProductFeature } from "../../types";
import styles from "./ProductArticle.module.css";
import classNames from "classnames";

interface ProductArticleProps {
  product: ProductFeature;
  detailPage?: boolean;
}

function ProductArticle({ product, detailPage }: ProductArticleProps) {
  if (!product) {
    return <h2>Product not found</h2>;
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
            <button>-</button>
            <span>0</span>
            <button>+</button>
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
