import Button from "../../components/Button";
import { ProductFeature } from "../../types";
import styles from "./ProductArticle.module.css";

interface ProductArticleProps {
  product: ProductFeature;
}

function ProductArticle({ product }: ProductArticleProps) {
  return (
    <article className={styles.productCard}>
      {product.new && <p className={styles.overline}>NEW PRODUCT</p>}
      <h2>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <Button type="dense" text="see product" path={`${product.slug}`} />
    </article>
  );
}

export default ProductArticle;
