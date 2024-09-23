import Button from "../../../components/Button";
import { Other } from "../../../types";
import styles from "./OtherCard.module.css";

interface OtherCardProps {
  product: Other;
}

function OtherCard({ product }: OtherCardProps) {
  return (
    <li className={styles.card}>
      <picture>
        <source media="(max-width: 750px)" srcSet={product.image.mobile} />
        <source media="(max-width: 1000px)" srcSet={product.image.tablet} />
        <img src={product.image.desktop} alt={`${product.name} image`} />
      </picture>
      <div>
        <h5>{product.name}</h5>
        <Button
          text="see product"
          type="dense"
          path={`/product/${product.category}/${product.slug}`}
        />
      </div>
    </li>
  );
}

export default OtherCard;
