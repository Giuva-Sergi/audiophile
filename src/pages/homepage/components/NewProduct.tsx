import styles from "./NewProduct.module.css";
import data from "../../../data/data.json";
import Button from "../../../components/Button";

function NewProduct() {
  const newProduct = data.find((product) => product.id === 4);

  return (
    <div className={styles.newProduct}>
      <p className={styles.overline}>NEW PRODUCT</p>
      <h1>XX99 Mark II Headphones</h1>
      <p className={styles.description}>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button
        path={`product/${newProduct?.category}/${newProduct?.slug}`}
        text="see product"
        type="dense"
      />
    </div>
  );
}

export default NewProduct;
