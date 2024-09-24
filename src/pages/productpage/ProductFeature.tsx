import { Product } from "../../types";
import ProductArticle from "./ProductArticle";
import styles from "./ProductFeature.module.css";
import ProductPicture from "./ProductPicture";

interface ProductFeatureProps {
  product: Product;
  reverse: boolean;
}

function ProductFeature({ product, reverse }: ProductFeatureProps) {
  // console.log(product);

  return (
    <section className={styles.productFeature}>
      {reverse ? (
        <>
          <ProductPicture image={product.categoryImage} name={product.name} />
          <ProductArticle
            product={{
              id: product.id,
              new: product.new,
              name: product.name,
              description: product.description,
              slug: product.slug,
              price: product.price,
            }}
          />
        </>
      ) : (
        <>
          <ProductArticle
            product={{
              id: product.id,
              new: product.new,
              name: product.name,
              description: product.description,
              slug: product.slug,
              price: product.price,
            }}
          />
          <ProductPicture image={product.categoryImage} name={product.name} />
        </>
      )}
    </section>
  );
}

export default ProductFeature;
