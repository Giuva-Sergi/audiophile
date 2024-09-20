import { Product } from "../../types";
import ProductArticle from "./ProductArticle";
import styles from "./ProductFeature.module.css";
import ProductPicture from "./ProductPicture";

interface ProductFeatureProps {
  product: Product;
  reverse: boolean;
}

function ProductFeature({ product, reverse }: ProductFeatureProps) {
  console.log(product.categoryImage);

  return (
    <section className={styles.productFeature}>
      {reverse ? (
        <>
          <ProductPicture image={product.categoryImage} name={product.name} />
          <ProductArticle
            product={{
              new: product.new,
              name: product.name,
              description: product.description,
              slug: product.slug,
            }}
          />
        </>
      ) : (
        <>
          <ProductArticle
            product={{
              new: product.new,
              name: product.name,
              description: product.description,
              slug: product.slug,
            }}
          />
          <ProductPicture image={product.categoryImage} name={product.name} />
        </>
      )}
    </section>
  );
}

export default ProductFeature;
